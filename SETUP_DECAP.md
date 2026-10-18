# EDOU CMS / setup

Editing entrance: https://edoustudio.com/@dmjn/

This is a review-branch implementation. Do not merge until GitHub OAuth
authentication is configured and tested.

## Security
The unusual path is not an access control. Use a GitHub OAuth proxy
(Cloudflare Worker or another supported service) with OAuth credentials
stored as Worker secrets, not in this repository. In Cloudflare Access,
protect /@dmjn/* with an allowlist for your email as an extra layer.
Protecting only the HTML page is insufficient; protect config.yml too.
The CMS GitHub backend still needs its own OAuth flow even with Access.

## Authentication to complete
1. Register a GitHub OAuth app with the callback URL required by your
   chosen OAuth proxy implementation.
2. Deploy a maintained Decap-compatible GitHub OAuth proxy.
3. Configure its client ID and secret as server-side secrets.
4. Uncomment backend.base_url and backend.auth_endpoint in
   @dmjn/config.yml, using the real OAuth proxy URL.
5. Ensure the OAuth redirect and popup work behind any Access policy.
6. Merge after reviewing and testing. Confirm Cloudflare Pages serves
   /@dmjn/ correctly and does not have a catch-all redirect swallowing it.

## Content
data/site.json and data/projects.json hold the editable content.
Uploaded media is saved to images/uploads and referenced by URL.
Decap saves to GitHub; Cloudflare Pages deploys each commit.
The site JavaScript accepts the CMS object shape {projects:[...]}.
The CMS list of image widgets serializes entries as strings; the
website expects image URL strings, not objects.

## Scope
This editor changes content, not arbitrary JS/CSS/HTML. The existing
wordmark, scroll headings, moonlit idle animation, Atlas and ruler
are preserved. For changes to About/Contact text, additional content
bindings would need to be added later.
