# Permissions Package Plan

Future RBAC should define clear access levels and entitlements.

## Roles

- anonymous.
- authenticated_user.
- plus_user.
- pro_user.
- team_member.
- team_admin.
- reviewer.
- editor.
- admin.
- owner.

## Notes

Role checks should happen server-side and be backed by RLS policies where data access is involved.
