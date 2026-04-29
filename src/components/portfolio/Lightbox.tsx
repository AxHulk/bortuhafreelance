import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

interface LightboxProps {
  images: ProjectImage[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, startIndex, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(startIndex);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = images.length;
  const current = images[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goPrev, goNext]);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Prefetch neighbours
  useEffect(() => {
    if (total <= 1) return;
    const prefetch = (src: string) => {
      const img = new Image();
      img.src = src;
    };
    prefetch(images[(index + 1) % total].src);
    prefetch(images[(index - 1 + total) % total].src);
  }, [index, images, total]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
      className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex flex-col"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-background">
        <span className="font-body text-xs tracking-[0.22em] uppercase text-background/70">
          {index + 1} / {total}
        </span>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Закрыть"
          className="p-2 rounded-sm hover:bg-background/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Image area */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-12 pb-4 relative">
        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Предыдущее изображение"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-sm bg-background/10 hover:bg-background/20 text-background transition-colors"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        <figure
          className="flex flex-col items-center max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[82vh] max-w-[90vw] object-contain rounded-sm"
          />
          {current.alt && (
            <figcaption className="mt-4 font-body text-xs tracking-wide text-background/70 italic text-center max-w-2xl">
              {current.alt}
            </figcaption>
          )}
        </figure>

        {total > 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Следующее изображение"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-sm bg-background/10 hover:bg-background/20 text-background transition-colors"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Lightbox;