# Delmela Café and Restaurant — Website

## Images needed (add to the `images/` folder)

| Filename              | Where it appears        | Ideal size         |
|-----------------------|-------------------------|--------------------|
| `hero.jpg`            | Full-screen hero banner | 1600×900px min     |
| `about.jpg`           | About section           | 800×1000px (tall)  |
| `menu-breakfast.jpg`  | Breakfast category card | 600×400px          |
| `menu-salads.jpg`     | Salads category card    | 600×400px          |
| `menu-bowls.jpg`      | Rice Bowls category     | 600×400px          |
| `menu-sandwiches.jpg` | Sandwiches category     | 600×400px          |
| `menu-desserts.jpg`   | Desserts category       | 600×400px          |
| `menu-drinks.jpg`     | Drinks category         | 600×400px          |

**Where to get photos:** Pull them from Delmela's Google Maps listing
(customer uploaded photos + the menu section images).

If an image is missing, the category card shows the gradient background
instead — it still looks great.

---

## Deploy to Vercel

1. Go to https://vercel.com and log in (free account)
2. Click **Add New → Project**
3. Click **"Deploy from folder"** and drag this folder
   — OR — push to GitHub and import from there
4. Leave ALL build settings blank (no build command, no output directory)
5. Click **Deploy**
6. Live in ~30 seconds ✅

You'll get a URL like: `delmela.vercel.app`
Later you can connect a custom domain (e.g. `delmela.com`) in Vercel settings.

---

## To update content later

Open `config.js` and change any value — prices, menu items, hours, links.
Then re-deploy (on Vercel, it re-deploys automatically if connected to GitHub,
or just drag the folder again).
