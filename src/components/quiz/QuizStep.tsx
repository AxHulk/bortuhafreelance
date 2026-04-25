import { useState, useRef } from "react";
import { Step, Field } from "./quizConfig";
import { Upload, X as XIcon, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Props = {
  step: Step;
  initial: Record<string, any>;
  sessionId: string;
  onNext: (data: Record<string, any>) => void;
  onSkip: () => void;
};

export const QuizStep = ({ step, initial, sessionId, onNext, onSkip }: Props) => {
  const [values, setValues] = useState<Record<string, any>>(() => {
    const v: Record<string, any> = {};
    step.fields.forEach((f) => {
      v[f.id] = initial[f.id] ?? defaultValue(f);
    });
    return v;
  });

  const setValue = (id: string, v: any) => setValues((s) => ({ ...s, [id]: v }));

  const allOptional = step.fields.every((f) => f.optional);
  const canProceed = step.fields.every((f) => f.optional || hasValue(values[f.id]));

  const handleNext = () => {
    if (!canProceed) return;
    onNext(values);
  };

  return (
    <div className="space-y-6">
      {step.fields.map((f) => (
        <FieldRenderer
          key={f.id}
          field={f}
          value={values[f.id]}
          onChange={(v) => setValue(f.id, v)}
          sessionId={sessionId}
        />
      ))}

      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-border">
        {allOptional ? (
          <button
            type="button"
            onClick={onSkip}
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Пропустить шаг
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canProceed}
          className="h-12 px-8 rounded-sm bg-primary text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Продолжить
        </button>
      </div>
    </div>
  );
};

/* ----------- FieldRenderer ----------- */

const FieldRenderer = ({
  field,
  value,
  onChange,
  sessionId,
}: {
  field: Field;
  value: any;
  onChange: (v: any) => void;
  sessionId: string;
}) => {
  const Label = (
    <div className="mb-3">
      <p className="font-body text-sm font-medium text-foreground">
        {field.label}
        {field.optional && <span className="text-muted-foreground font-normal text-xs ml-2">(необязательно)</span>}
      </p>
      {field.hint && <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">{field.hint}</p>}
    </div>
  );

  switch (field.type) {
    case "text":
      return (
        <div>
          {Label}
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className="h-12 w-full px-4 rounded-sm border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      );

    case "textarea":
      return (
        <div>
          {Label}
          <textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            maxLength={field.maxLength}
            rows={5}
            className="w-full px-4 py-3 rounded-sm border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
          {field.maxLength && (
            <p className="font-body text-xs text-muted-foreground text-right mt-1">
              {(value || "").length} / {field.maxLength}
            </p>
          )}
        </div>
      );

    case "number":
      return (
        <div>
          {Label}
          <input
            type="number"
            value={value ?? ""}
            min={field.min}
            max={field.max}
            onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
            className="h-12 w-full px-4 rounded-sm border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      );

    case "single":
      return (
        <div>
          {Label}
          <SingleField field={field} value={value} onChange={onChange} />
        </div>
      );

    case "multi":
      return (
        <div>
          {Label}
          <MultiField field={field} value={value} onChange={onChange} />
        </div>
      );

    case "tags":
      return (
        <div>
          {Label}
          <TagsField field={field} value={value} onChange={onChange} />
        </div>
      );

    case "rooms":
      return (
        <div>
          {Label}
          <SingleField
            field={{
              ...field,
              type: "single",
              options: [
                { value: "studio", label: "Студия" },
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5+", label: "5 и более" },
              ],
            }}
            value={value}
            onChange={onChange}
          />
        </div>
      );

    case "family":
      return (
        <div>
          {Label}
          <FamilyField value={value} onChange={onChange} />
        </div>
      );

    case "files":
      return (
        <div>
          {Label}
          <FilesField field={field} value={value} onChange={onChange} sessionId={sessionId} />
        </div>
      );

    case "yesno-files":
      return (
        <div>
          {Label}
          <YesNoFilesField field={field} value={value} onChange={onChange} sessionId={sessionId} />
        </div>
      );

    default:
      return null;
  }
};

/* ----------- Sub-components ----------- */

const SingleField = ({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: any;
  onChange: (v: any) => void;
}) => {
  const current = value?.value ?? value ?? "";
  const otherText = value?.other ?? "";
  return (
    <div className="space-y-2">
      {field.options?.map((o) => {
        const active = current === o.value;
        return (
          <div key={o.value}>
            <button
              type="button"
              onClick={() => onChange(o.allowOther ? { value: o.value, other: otherText } : o.value)}
              className={`w-full text-left px-4 py-3 rounded-sm border font-body text-sm transition-colors ${
                active
                  ? "border-primary bg-primary/5 text-foreground"
                  : "border-border text-foreground/80 hover:border-primary/50"
              }`}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    active ? "border-primary" : "border-border"
                  }`}
                >
                  {active && <span className="w-2 h-2 rounded-full bg-primary" />}
                </span>
                {o.label}
              </span>
            </button>
            {active && o.allowOther && (
              <input
                type="text"
                autoFocus
                value={otherText}
                onChange={(e) => onChange({ value: o.value, other: e.target.value })}
                placeholder="Уточните…"
                className="mt-2 h-10 w-full px-4 rounded-sm border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const MultiField = ({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: any;
  onChange: (v: any) => void;
}) => {
  const selected: string[] = value?.values ?? [];
  const other: string = value?.other ?? "";
  const showOther = field.allowOther;

  const toggle = (v: string) => {
    const next = selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v];
    onChange({ values: next, ...(showOther ? { other } : {}) });
  };

  return (
    <div className="space-y-2">
      {field.options?.map((o) => {
        const active = selected.includes(o.value);
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => toggle(o.value)}
            className={`w-full text-left px-4 py-3 rounded-sm border font-body text-sm transition-colors ${
              active
                ? "border-primary bg-primary/5 text-foreground"
                : "border-border text-foreground/80 hover:border-primary/50"
            }`}
          >
            <span className="inline-flex items-center gap-3">
              <span
                className={`w-4 h-4 rounded-sm border flex items-center justify-center ${
                  active ? "border-primary bg-primary" : "border-border"
                }`}
              >
                {active && <Check size={12} className="text-primary-foreground" />}
              </span>
              {o.label}
            </span>
          </button>
        );
      })}
      {showOther && (
        <input
          type="text"
          value={other}
          onChange={(e) => onChange({ values: selected, other: e.target.value })}
          placeholder="Другое…"
          className="h-10 w-full px-4 rounded-sm border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      )}
    </div>
  );
};

const TagsField = ({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: any;
  onChange: (v: any) => void;
}) => {
  const selected: string[] = value?.values ?? [];
  const other: string = value?.other ?? "";
  const showOtherInput = field.allowOther && (selected.includes("__other__") || other);

  const toggle = (v: string) => {
    const next = selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v];
    onChange({ values: next, other });
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {field.options?.map((o) => {
          const active = selected.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => toggle(o.value)}
              className={`px-4 py-2 rounded-full border font-body text-sm transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/80 hover:border-primary/50"
              }`}
            >
              {o.label}
            </button>
          );
        })}
        {field.allowOther && (
          <button
            type="button"
            onClick={() => toggle("__other__")}
            className={`px-4 py-2 rounded-full border font-body text-sm transition-colors ${
              selected.includes("__other__")
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground/80 hover:border-primary/50"
            }`}
          >
            Другое
          </button>
        )}
      </div>
      {showOtherInput && (
        <input
          type="text"
          value={other}
          onChange={(e) => onChange({ values: selected, other: e.target.value })}
          placeholder="Опишите своими словами…"
          className="h-10 w-full px-4 rounded-sm border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
      )}
    </div>
  );
};

const FamilyField = ({ value, onChange }: { value: any; onChange: (v: any) => void }) => {
  const v = value || { adults: "", kids: "", pets: "", growing: false };
  const set = (k: string, val: any) => onChange({ ...v, [k]: val });
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={v.adults}
        onChange={(e) => set("adults", e.target.value)}
        placeholder="Взрослые (возраст)"
        className="h-12 w-full px-4 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <input
        type="text"
        value={v.kids}
        onChange={(e) => set("kids", e.target.value)}
        placeholder="Дети (возраст)"
        className="h-12 w-full px-4 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <input
        type="text"
        value={v.pets}
        onChange={(e) => set("pets", e.target.value)}
        placeholder="Домашние животные (кто)"
        className="h-12 w-full px-4 rounded-sm border border-border bg-background font-body text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={!!v.growing}
          onChange={(e) => set("growing", e.target.checked)}
          className="w-4 h-4 accent-primary"
        />
        <span className="font-body text-sm text-foreground">
          Планируем пополнение в ближайшие 5 лет
        </span>
      </label>
    </div>
  );
};

const FilesField = ({
  field,
  value,
  onChange,
  sessionId,
}: {
  field: Field;
  value: string[];
  onChange: (v: string[]) => void;
  sessionId: string;
}) => {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const files = value || [];
  const max = field.maxFiles ?? 5;

  const handleFiles = async (list: FileList | null) => {
    if (!list) return;
    const remaining = max - files.length;
    const toUpload = Array.from(list).slice(0, remaining);
    if (!toUpload.length) return;
    setUploading(true);
    try {
      const uploaded: string[] = [];
      for (const file of toUpload) {
        if (file.size > 10 * 1024 * 1024) {
          toast.error(`${file.name}: больше 10 МБ`);
          continue;
        }
        const ext = file.name.split(".").pop() || "bin";
        const path = `quiz-uploads/${sessionId}/${field.id}/${crypto.randomUUID()}.${ext}`;
        const key = path.replace(/^quiz-uploads\//, "");
        const { error } = await supabase.storage.from("quiz-uploads").upload(key, file, {
          contentType: file.type,
          upsert: false,
        });
        if (error) {
          toast.error(`Ошибка загрузки: ${file.name}`);
          continue;
        }
        uploaded.push(path);
      }
      onChange([...files, ...uploaded]);
    } finally {
      setUploading(false);
    }
  };

  const remove = (p: string) => onChange(files.filter((x) => x !== p));

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*,application/pdf"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      {files.length < max && (
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed border-border hover:border-primary rounded-sm py-8 px-4 text-center transition-colors disabled:opacity-50"
        >
          <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="font-body text-sm text-foreground">
            {uploading ? "Загружаем…" : "Нажмите, чтобы выбрать файлы"}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            JPG, PNG, PDF до 10 МБ. Осталось: {max - files.length}
          </p>
        </button>
      )}
      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((p) => (
            <li
              key={p}
              className="flex items-center justify-between gap-2 px-3 py-2 border border-border rounded-sm bg-muted/30"
            >
              <span className="font-body text-xs text-foreground/80 truncate">
                {p.split("/").pop()}
              </span>
              <button
                type="button"
                onClick={() => remove(p)}
                className="p-1 text-muted-foreground hover:text-destructive transition-colors"
              >
                <XIcon size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const YesNoFilesField = ({
  field,
  value,
  onChange,
  sessionId,
}: {
  field: Field;
  value: any;
  onChange: (v: any) => void;
  sessionId: string;
}) => {
  const v = value || { hasRefs: null as null | boolean, files: [] as string[] };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {[
          { val: true, label: "Да" },
          { val: false, label: "Нет" },
        ].map((o) => {
          const active = v.hasRefs === o.val;
          return (
            <button
              key={String(o.val)}
              type="button"
              onClick={() => onChange({ ...v, hasRefs: o.val })}
              className={`py-3 rounded-sm border font-body text-sm transition-colors ${
                active
                  ? "border-primary bg-primary/5 text-foreground"
                  : "border-border text-foreground/80 hover:border-primary/50"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
      {v.hasRefs === true && (
        <div>
          <p className="font-body text-xs text-muted-foreground mb-2">
            Приложите до {field.maxFiles ?? 5} изображений интерьеров.
          </p>
          <FilesField
            field={{ ...field, id: field.id + "_files", type: "files" }}
            value={v.files}
            onChange={(files) => onChange({ ...v, files })}
            sessionId={sessionId}
          />
        </div>
      )}
    </div>
  );
};

/* ----------- helpers ----------- */

function defaultValue(f: Field): any {
  switch (f.type) {
    case "multi":
    case "tags":
      return { values: [], other: "" };
    case "files":
      return [];
    case "yesno-files":
      return { hasRefs: null, files: [] };
    case "family":
      return { adults: "", kids: "", pets: "", growing: false };
    case "number":
      return "";
    default:
      return "";
  }
}

function hasValue(v: any): boolean {
  if (v == null || v === "") return false;
  if (Array.isArray(v)) return v.length > 0;
  if (typeof v === "object") {
    if ("value" in v) return !!v.value;
    if ("values" in v) return v.values.length > 0;
    if ("hasRefs" in v) return v.hasRefs !== null;
  }
  return true;
}