# Supabase Storage Plan

## Planned Buckets

- `public-assets`: public product assets.
- `raw-source-documents`: private.
- `normalized-source-documents`: private.
- `user-uploads`: private.
- `evidence-snapshots`: private.
- `exports`: private.
- `admin-attachments`: private.

## Rules

- Buckets private by default except `public-assets`.
- Use signed URLs for user and admin downloads.
- Apply RLS on storage objects.
- Add malware and file type validation later.
- Define file size limits before launch.
- Define retention periods by bucket.
