# Sources Docs

Planning documents for TrueEffect source strategy.

## Official/API-First Options

- Congress.gov API for federal bills and legislative data.
- api.data.gov for federal agency API entry points.
- Data.gov for dataset discovery.
- Regulations.gov API for federal regulatory documents.
- GovInfo for official federal publications.
- Google Civic Information API for address-to-civic geography and representatives.
- California Open Data portal.
- California Legislative Information.
- Local city, county, and school district agenda systems.
- Emergency alert sources.
- Utility and regulatory agency public notices.
- BLS, FRED, EIA, NOAA, and Census later for economic and environmental context.

## Third-Party Alternatives

- LegiScan/OpenStates for state legislative coverage if official state access is insufficient.
- Apify managed actors for difficult public sites.
- Firecrawl for extraction if allowed and useful.
- Browserless for hosted browser automation.
- Mapbox for maps later.
- Meilisearch or Typesense for search later.

## Scraping Tooling

- Cheerio/static parser for simple pages.
- Playwright for dynamic public pages.
- PDF extraction tools for agendas and minutes.
- OCR only as last resort.
- Manual entry fallback for high-value local sources.

## Architecture-Only Status

No source adapters or scraping code exists here.
