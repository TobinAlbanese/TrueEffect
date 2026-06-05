# RLS Plan

- User-owned profile rows are only visible to their owner.
- Public published content is readable by everyone when intended for public access.
- Unpublished, draft, and admin content is hidden from normal users.
- Admin tables require role checks.
- Service-role usage happens only inside trusted server jobs.
- Storage buckets are protected by RLS and signed URLs.
- Review actions, source changes, and role changes should be audited.
- Policy tests should run before production launch.

No SQL policies are included in this architecture-only pass.
