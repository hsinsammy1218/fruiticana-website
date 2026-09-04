# Archived myfruiticana.com visual reference (2007)

These JPEGs were downloaded from the Internet Archive capture of
http://www.myfruiticana.com/ (March 2007). They are **design-reference
only**. They are not served on the live site.

The production brand is recreated as SVG/CSS in `src/components/ui/Logo.tsx`
and `src/components/brand/OriginalBrandMotif.tsx`. Do not embed these
screenshots or low-resolution JPEGs as the logo or hero.

| File | Original role | How it is used now |
| --- | --- | --- |
| `fruiti_logo.jpg` | Script wordmark (green fill, yellow outline, strawberry i-dots) | Traced as SVG/HTML lockup with strawberry tittles |
| `slogan.jpg` | “THE NEW WAY TO EAT FRUIT” (red serif) | Modernized as “An exciting new way to eat fruit.” in type |
| `creamless.jpg` | “Cream-Less Ice Crème” script | Subtitle on the logo: Creamless Ice Cream |
| `left_column_bak.jpg` | Vertical fruit-scoop photo column | Inspiration for `OriginalBrandMotif` fruit cluster |
| `top_row_bak.jpg` | Yellow–green header strip | CSS gradient brand bar |
| `bottom_row_bak.jpg` | Yellow–green footer strip | CSS gradient brand bar |
| `greenline_footer.jpg` | Green footer rule | Footer/nav accent |
| `heart.jpg` | Heart graphic with fruit cones / “A Gift For Your Heart” | Recreated at high resolution as `public/images/brand/heart.webp` for the homepage hero |

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
