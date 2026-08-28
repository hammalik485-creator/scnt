# SCNT — Perfume Store Website

A premium, fully-responsive e-commerce site for your SCNT fragrance brand.
Built with plain HTML/CSS/JS — no build step, no dependencies, works anywhere.

## Pages
- `index.html` — Home (hero, bestsellers, collections, brand story, bundles, newsletter)
- `shop.html` — Shop all (filter by Men / Women / Unisex / Bundles, sort by price/rating)
- `product.html?id=…` — Product detail (image gallery, notes, add to bag, buy on WhatsApp)

## How to open
Just **double-click `index.html`** — it runs directly in any browser. Everything
(cart, filtering, WhatsApp checkout) works with no server needed.

## ✅ Before you go live — edit these
Open **`js/data.js`** and change the `SITE` block at the top:

| Setting | What it does |
|---|---|
| `whatsapp` | **Your WhatsApp number** — set to `923021560290`. Country code + number, digits only. Orders open a pre-filled chat to this number. |
| `email` | Contact email shown in the footer — set to `info@scntperfume.com`. |
| `currency` | Currency label (currently `Rs.`). |
| `freeShipOver` | Free-delivery threshold (currently `3000`). |

### Change prices / details
Each product is a block in the `PRODUCTS` (and `PACKS`) list in `js/data.js`.
Edit `price`, `desc`, `notes`, `gender`, etc. To add a product, copy any block,
give it a unique `id`, and point `images` at its folder.

### Cart & checkout
The cart lives in the customer's browser (localStorage). "Order via WhatsApp"
builds an itemized message with the total and opens WhatsApp so you confirm the
order and address in chat (Cash on Delivery friendly).

## Publish it online (free options)
1. **Netlify Drop** — go to app.netlify.com/drop and drag the whole `scnt` folder in. Done.
2. **GitHub Pages** — push the folder to a repo, enable Pages.
3. **Vercel / Cloudflare Pages** — import the folder, no config needed.

Any of these gives you a live link you can share and connect a custom domain to.

## Notes
- Product images are read from the `Images/` folder — keep that folder next to the HTML files.
- The site labels fragrances as "inspired by" the originals, and the footer states
  it is not affiliated with the original brands.
