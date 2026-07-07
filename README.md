# Customer Demos Hub

Live: https://fivetran-jasonchletsos.github.io/Customer-Demos-Hub/

An index of customer-specific Fivetran ODI demos. Each demo is its own repo and its own deployed
GitHub Pages site — this repo is just a landing page linking to them, not a merged codebase.

## Adding a new customer demo

1. Build the demo as its own repo (e.g. `<Customer>-ODI-Demo`), deployed to its own GitHub Pages URL.
2. Add one entry to [`demos.json`](demos.json):

```json
{
  "customer": "Customer Name",
  "systems": ["System A", "System B"],
  "summary": "One or two sentences on what the demo covers and why it was built.",
  "url": "https://fivetran-jasonchletsos.github.io/<Customer>-ODI-Demo/",
  "repo": "https://github.com/fivetran-jasonchletsos/<Customer>-ODI-Demo",
  "added": "YYYY-MM-DD"
}
```

3. Commit and push — no build step, GitHub Pages serves `index.html` directly from `main`.

## Current demos

See [`demos.json`](demos.json) for the current list, or just visit the live site above.
