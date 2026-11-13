# Potluck guide

The user guide for [Potluck](https://potluck.fermulate.com), the free app for splitting expenses with friends and planning get-togethers. The app's code lives in [Fermulate/potluck](https://github.com/Fermulate/potluck).

The guide is a static site built with [Astro Starlight](https://starlight.astro.build). It has built-in search and follows the reader's light or dark theme, screenshots included.

## Run it

You need Node 22 or newer.

```sh
npm ci
npm run dev       # http://localhost:4321
```

## Build it

```sh
npm run build     # writes the site to dist/ and checks every internal link
npm run preview   # serves dist/ on http://localhost:4321
```

The build fails if any internal link or `#anchor` points nowhere ([starlight-links-validator](https://github.com/HiDeoo/starlight-links-validator)).

## Where things are

| Path | What |
| --- | --- |
| `src/content/docs/` | One `.mdx` file per page. The file path is the URL. |
| `src/components/Screenshot.astro` | Shows an app screenshot that matches the reader's theme. |
| `src/components/` | The landing hero, the page menu, the header title and the footer. |
| `src/styles/` | Fonts, the Supper Club colors, and type. |
| `public/screenshots/` | Real screenshots from the app, phone and desktop, light and dark. |
| `astro.config.mjs` | Site settings and the sidebar. |

### URLs are a contract

The app links straight to pages of this guide for contextual help (for example `/expenses/splits/` or `/plans/availability/`). Do not rename or move a page without keeping its old URL working.

### Screenshots

Each screen is saved four times: `<name>-<mobile|desktop>-<light|dark>.png`. Use them like this:

```mdx
import Screenshot from '~/components/Screenshot.astro'

<Screenshot name="settle" alt="What the screen shows, in a sentence or two." />
<Screenshot name="home" device="desktop" alt="..." />
```

Phone shots are the default. The component renders the light and dark images and hides the one that does not match the theme, so the theme switcher in the header works too. Every screenshot needs real alt text that says what is on screen. Delete screenshots no page uses.

### Writing

- Use the app's exact button and screen names, in bold: **Add expense**, **Settle up**. The wording comes from `packages/i18n/src/en/` in the app repo.
- Short pages, numbered steps, one screenshot per key step.
- Sentence case headings. Plain words. No em or en dashes.

## Deploy

The guide is live at https://docs.potluck.fermulate.com. Pushing to `main` builds the site and deploys `dist/` to Cloudflare Workers as static assets (worker name `potluck-docs`, see `wrangler.jsonc`). `wrangler.jsonc` lists `docs.potluck.fermulate.com` as a custom domain route, so a deploy keeps it attached, and keeps https://potluck-docs.potluck-web.workers.dev working too. The workflow needs:

- the repository secret `CLOUDFLARE_API_TOKEN`, with Workers Routes edit on the `fermulate.com` zone
- the repository variable `CLOUDFLARE_ACCOUNT_ID`

Without the token, the workflow builds and skips the deploy. Pull requests build and check links in `ci.yml`.

To deploy by hand:

```sh
npm run build
npx wrangler deploy
```

## License

The guide's text and screenshots are licensed under [Creative Commons Attribution-ShareAlike 4.0](LICENSE) (CC BY-SA 4.0). You can copy and adapt them, including commercially, as long as you credit the Potluck project and share your changes under the same license.

The site's code (components, styles and config) is under the same license. Potluck itself is free software under the [AGPL-3.0](https://github.com/Fermulate/potluck/blob/main/LICENSE).
