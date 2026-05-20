# GoTeam User Management Dashboard

A browser-based dashboard for managing GoTeam user lifecycles — Onboarding, Offboarding, and Licensing. Talks directly to Microsoft 365 via the Graph API for user creation, license assignment, and MFA group membership.

## What's in this repo

| File | Purpose |
|---|---|
| `dashboard.html` | Single-file dashboard (UI + JS). Loads MSAL.js from CDN. |
| `dashboard-seed.example.js` | Template showing the structure of seed data. |
| `dashboard-seed.js` | **GITIGNORED** — your local data file. Contains real starter / departure records. |
| `.gitignore` | Excludes `dashboard-seed.js` and editor temp files from commits. |

## Quick start (local)

1. Clone this repo.
2. Copy `dashboard-seed.example.js` to `dashboard-seed.js` and replace the example records with your data (or leave empty for a fresh start).
3. From this folder, run a local web server:

   ```
   python -m http.server 8000
   ```

4. Open `http://localhost:8000/dashboard.html` in your browser.

The dashboard will not work if opened directly from disk (`file://`) — Microsoft Graph requires HTTP/HTTPS.

## Azure AD app registration (one-time)

The dashboard signs into your Microsoft 365 tenant to create users via Graph. Set up an app registration:

1. **portal.azure.com** → Microsoft Entra ID → App registrations → New registration.
2. Name: `GoTeam User Management Dashboard`. Single-tenant. Skip the redirect URI for now.
3. **Authentication → Add a platform → Single-page application** → add your dashboard URL as the redirect URI (e.g. `http://localhost:8000/dashboard.html`). You can list multiple URIs.
4. **API permissions → Add a permission → Microsoft Graph → Delegated**, add:
   - `User.ReadWrite.All`
   - `Group.ReadWrite.All`
   - `Directory.ReadWrite.All`
   - `Mail.Read`
   - `Files.ReadWrite.All`
   - `Sites.ReadWrite.All`
   - `Sites.Manage.All` (required to create SharePoint lists)
   - `Organization.Read.All`

   Click **Grant admin consent** (requires a Global Admin or Privileged Role Administrator).
5. From the app's Overview, copy the **Application (client) ID** and **Directory (tenant) ID**.
6. (Optional) Get the Object ID of the security group you use for MFA enforcement.
7. In the dashboard sidebar, click the gear icon (MS365 Settings), paste the IDs, click Save Settings.
8. Click **Sign In** in the sidebar. After signing in, open MS365 Settings again and click **Fetch SKU IDs** to discover and paste your Business Basic and F3/Frontline SKU IDs.

## Deploying

`dashboard.html` is a static file with no build step. Any static-host that serves it over HTTPS will work — Azure Static Web Apps, Cloudflare Pages, SharePoint, GitHub Pages on a public repo, etc. The redirect URI in Azure must exactly match the deployed URL.

## Updating data

Talk to Claude in a conversation: "refresh the dashboard". Claude reads your CLEAR-A-PATH inbox and rewrites `dashboard-seed.js` locally. (Phase 2 of the migration will replace this with a SharePoint List backend so the data is shared automatically.)

## Tech

- Vanilla HTML/CSS/JS — no build, no framework
- [MSAL.js v2](https://github.com/AzureAD/microsoft-authentication-library-for-js) for OAuth
- [Microsoft Graph](https://learn.microsoft.com/en-us/graph/) for user / license / group / mail operations
- LocalStorage for client-side state (per-browser)
