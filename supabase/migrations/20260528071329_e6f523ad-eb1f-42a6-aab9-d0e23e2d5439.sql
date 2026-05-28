
-- 1. Make quiz-uploads bucket private
UPDATE storage.buckets SET public = false WHERE id = 'quiz-uploads';

-- 2. Replace storage policies
DROP POLICY IF EXISTS "Public can view quiz-uploads" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload to quiz-uploads" ON storage.objects;

-- Allow anonymous and authenticated uploads under structured path:
-- quiz-uploads/<sessionId>/<fieldId>/<uuid>.<ext>
CREATE POLICY "Quiz uploads structured insert"
ON storage.objects
FOR INSERT
TO anon, authenticated
WITH CHECK (
  bucket_id = 'quiz-uploads'
  AND array_length(string_to_array(name, '/'), 1) >= 3
  AND (storage.foldername(name))[1] IS NOT NULL
);

-- 3. Lock down SECURITY DEFINER email functions to service_role only
REVOKE EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.delete_email(text, bigint) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.enqueue_email(text, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.delete_email(text, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.read_email_batch(text, integer, integer) TO service_role;
GRANT EXECUTE ON FUNCTION public.move_to_dlq(text, text, bigint, jsonb) TO service_role;

-- 4. Pin search_path on those functions
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public, pgmq;
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public, pgmq;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public, pgmq;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public, pgmq;
