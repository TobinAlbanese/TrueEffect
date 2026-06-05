# Search Package Plan

Search should start with Postgres full-text search for issues, source documents, and published cards. pgvector can support semantic document and issue retrieval later. Meilisearch or Typesense should be considered only if app search grows beyond Postgres. Search privacy rules must avoid exposing private user data, draft content, or admin-only records.
