# Migration Strategy

Future migrations should be small, reviewed, reversible where practical, and paired with RLS policy reviews. Schema changes that affect user data, review workflows, billing, or storage should include staging validation, backup planning, and migration checks before production deploys.
