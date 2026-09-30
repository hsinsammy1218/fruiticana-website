# Archived myfruiticana.com visual reference (2007)

These JPEGs were downloaded from the Internet Archive capture of
http://www.myfruiticana.com/ (March 2007). Most remain design-reference
only. The script wordmark and Cream-Less subtitle are also prepared as
transparent PNGs under `public/images/brand/` for the live `Logo`
component.

Brand bars and fruit motifs still come from CSS in
`src/components/brand/OriginalBrandMotif.tsx`.

| File | Original role | How it is used now |
| --- | --- | --- |
| `fruiti_logo.jpg` | Script wordmark (green fill, yellow outline, strawberry i-dots) | Served as `public/images/brand/fruiti-logo.png` via `Logo` |
| `slogan.jpg` | “THE NEW WAY TO EAT FRUIT” (red serif) | Modernized as “An exciting new way to eat fruit.” in type |
| `creamless.jpg` | “Cream-Less Ice Crème” script | Served as `public/images/brand/creamless.png` under the logo |
| `left_column_bak.jpg` | Vertical fruit-scoop photo column | Inspiration for `OriginalBrandMotif` fruit cluster |
| `top_row_bak.jpg` | Yellow–green header strip | CSS gradient brand bar |
| `bottom_row_bak.jpg` | Yellow–green footer strip | CSS gradient brand bar |
| `greenline_footer.jpg` | Green footer rule | Footer/nav accent |
| `heart.jpg` | Heart graphic with fruit cones / “A Gift For Your Heart” | Recreated at high resolution as `public/images/brand/heart.webp` for the homepage hero. The live ribbon now reads “An exciting new way to eat fruit” (the legacy heart slogan was dropped to avoid a cardiovascular implication) |

## Missing from the archive (do not invent)

- Vector logo file from the owner
- Product photography (`img/flavors/*.jpg` referenced in HTML but not crawled)
- School/cafeteria photography
- Business PDF scans (content is transcribed in `src/data/`; `documents[].file` is `null`)
- Current phone, email, or address
- `logo.ico` (404 in the 2007 capture)

## Do not restore

- Add-to-cart / pricing / Authorize.net
- Healing Strength disease icons
- 2007 Waterbury phone/address as current contact
- Heart-check as a live certification badge
