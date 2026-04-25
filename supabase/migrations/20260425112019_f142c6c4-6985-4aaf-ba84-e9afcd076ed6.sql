-- Quiz leads table
CREATE TABLE public.quiz_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  track TEXT NOT NULL CHECK (track IN ('residential', 'commercial')),
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  contact_name TEXT NOT NULL,
  contact_type TEXT NOT NULL CHECK (contact_type IN ('phone', 'email', 'telegram', 'whatsapp')),
  contact_value TEXT NOT NULL,
  file_paths TEXT[] DEFAULT ARRAY[]::TEXT[],
  status TEXT NOT NULL DEFAULT 'new',
  user_agent TEXT,
  referrer TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.quiz_leads ENABLE ROW LEVEL SECURITY;

-- Anyone (anon) can insert a lead
CREATE POLICY "Anyone can submit a quiz lead"
  ON public.quiz_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon — leads readable only via service role / backend

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_quiz_leads_updated_at
BEFORE UPDATE ON public.quiz_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Storage bucket for plans and references
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'quiz-uploads',
  'quiz-uploads',
  true,
  10485760,
  ARRAY['image/jpeg','image/png','image/webp','image/gif','application/pdf']
)
ON CONFLICT (id) DO NOTHING;

-- Public can view files (needed so the designer can open links)
CREATE POLICY "Public can view quiz-uploads"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'quiz-uploads');

-- Anyone can upload to quiz-uploads (files go under random session folder created in code)
CREATE POLICY "Anyone can upload to quiz-uploads"
  ON storage.objects
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'quiz-uploads');