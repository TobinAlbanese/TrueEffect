# Server Library Plan

Server-only logic goes here later.

## Rules

- Never import service-role keys into client components.
- All sensitive data access must go through a data access layer.
- Return safe DTOs only.
- Keep secrets and privileged operations behind trusted server boundaries.
- Validate inputs before writes and sensitive reads.

## Architecture-Only Status

No server code exists in this pass.
