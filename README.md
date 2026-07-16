# Favourite Series

Personal list of favourite TV series — a static site with no build step, no framework, and no backend.

## What it is

Series, each shown as a poster card in a responsive grid.<br>
Click a card to flip it (front: poster; back: year(s), genre, episode/season counts, and links out to IMDB / JustWatch / Wikipedia / YouTube).<br>
Filter the grid by genre, country, or year via the **Filters** panel.

## Stack

Plain HTML/CSS/JS — no dependencies, no package.json, no build tooling.

- `index.html` — page shell only; the series grid is rendered into an empty container at runtime
- `series.json` — the series entries (title, year(s), genre(s), country, episodes, seasons, poster, links) — edit this to add/change a series, not the HTML
- `styles.css` — layout, theming, the flip-card animation
- `script.js` — fetches `series.json` and renders the cards, then does filter logic, view-tab switching, and the grid auto-fit sizing described below
- `images/` — posters + link icons
- `fonts/` — FoxyScriptRegular (titles)

## Layout notes

The page is a fixed-height app shell: a locked header (title, view tab, filter panel) on top, and an independently-scrolling content area below it filling the rest of the viewport (`100dvh`).

The grid is sized in JS to fit a clean 6×3 screenful without scrolling on desktop — column/row size is computed from whichever is more restrictive, the available width ÷ 6 or the available height ÷ 3, so the grid works at any window size rather than assuming one.

## Design (styles.css)

- Purple/red/orange palette throughout (borders, links, buttons, gradients) so the posters stay the visually loudest thing on the page.
- **FoxyScriptRegular** for titles only (h1, card-back titles); body text stays in a plain sans-serif for readability. Titles get a stronger `text-shadow` to stay legible over the gradient backgrounds.
- Scrollbars are palette-styled, not left as browser default.
- The flip-hint icon (⟲) replaces a title/flag overlay on the card front — small and low-opacity so it doesn't compete with the poster; title/flag live on the back where there's room.
- Year/Genre/Episode/Season values are italicised (labels aren't), to separate field from value without extra punctuation.
- The footer lives *inside* the scrollable area, not pinned — a fixed footer would sit permanently over the last row of posters, cluttering exactly the content it's supposed to stay out of the way of. Letting it scroll away keeps the grid reading as one clean screenful.

## Behaviour (script.js)

- **Flip cards**: a `.is-flipped` class toggle drives a CSS 3D transform; works via click or Enter/Space. Links on the back face aren't intercepted, so they navigate normally instead of re-flipping the card.
- **Grid sizing is computed, not guessed**: `fitSeriesGrid()` measures available width/height of the screen and takes whichever is more restrictive (width ÷ 6 columns vs. height ÷ 3 rows, via the card's 2:3 aspect ratio) to guarantee a full 6×3 screenful fits on desktop at any window size.
- **Filtering** toggles a `.hidden` class on non-matching cards from `data-genres`/`data-country`/`data-years` attributes — no re-render. Picking one dropdown resets the other two (single-criterion, by design). Open-ended runs (e.g. a show still airing) filter on their start year only; closed runs filter across every year they spanned.
- **Filters sit behind a button** rather than staying open, because the grid's fit math treats the header as one fixed-height block — a permanently-open panel would shrink or destabilise that space and undermine the fit-without-scrolling goal.
- **Images lazy-load** (native `loading="lazy"`, not custom JS) — with dozens of posters plus link icons on the page, only the ones actually near the viewport get fetched up front.

## License

MIT — see [LICENSE](LICENSE).
