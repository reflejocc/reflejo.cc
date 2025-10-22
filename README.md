
# LuonModels Template

LuonModels is a sleek and fluid Astro enterprise template specifically designed for modeling agencies, photographers, and studios. It aims to showcase people, photography, and information clearly and effectively, while also making it convenient to build event pages, content blogs, and various other specialized pages.

![LuonModels](public/og.jpg)

### Demo Online
Visit [luonmodels.vercel.app](https://luonmodels.vercel.app)

## What will you get:

✅ Built using Astro.js
✅ Mobile responsive design
✅ Figma Design files
✅ 10+ Premium screens
✅ Full customizable
✅ Clean, modern and minimalist style
✅ Neatly & organized layer
✅ Global style guide


## Key Features

- **📝 Simple Customization**
Through multiple intuitive JSON files, you can easily change website information, configuration, TDK, and SEO-friendly content without manually editing information on each page.

- **⚡ Fast & SEO-Friendly**
Built on Astro and optimized for speed and discoverability, essential for attracting new clients and collaborators.

- **📱 Responsive on Every Screen**
Whether viewed on a phone, tablet, or desktop, Aerials ensures your photography looks stunning across all devices.

- **Animation Interactions**
Utilizing GSAP for sophisticated interactions and animation effects that enhance the overall design experience.


## Version

```
"astro": "^5.9.2",
"gsap": "^3.13.0",
"lenis": "^1.3.4",
"sass": "^1.89.2",
"siteloader": "^0.0.90",
"splitting": "^1.1.0",
"sticky-js": "^1.3.0",
"swiper": "^11.2.8",
"typescript": "^5.8.3"
```


## Environment variables

```
# .env
PUBLIC_SITE_URL=
PUBLIC_SITE_NAME=
# Analytics IDs.
# If you use Google Analytics 4 and Umami, set your Umami ID here.
PUBLIC_GA4_ID=
PUBLIC_UMAMI_ID=
```



## Project Structure
Project Tree

```md
LuonModels-templates
├─ astro.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  ├─ favicon.png
│  └─ images
├─ src
│  ├─ components
│  │  ├─ MainHead.astro
│  │  ├─ function
│  │  │  ├─ Meta.astro
│  │  │  └─ Analytics.astro
│  │  ├─ section
│  │  │  ├─ About.astro
│  │  │  ├─ ContactForm.astro
│  │  │  ├─ Footer.astro
│  │  │  ├─ GalleryItem.astro
│  │  │  ├─ Hero.astro
│  │  │  ├─ JoinUs.astro
│  │  │  ├─ LatestBlog.astro
│  │  │  ├─ Marquee.astro
│  │  │  ├─ Nav-single.astro
│  │  │  ├─ Nav.astro
│  │  │  ├─ News.astro
│  │  │  ├─ NewsItem.astro
│  │  │  └─ Project.astro
│  │  └─ ui
│  │     ├─ Button.astro
│  │     ├─ ButtonContact.astro
│  │     ├─ Cursor.astro
│  │     └─ Preloader.astro
│  ├─ config
│  │  ├─ footer.js
│  │  ├─ seoTdk.js
│  │  ├─ site.js
│  │  └─ social.js
│  ├─ content
│  │  ├─ blog
│  │  │  └─ slug.mdx
│  │  └─ config.ts
│  ├─ data
│  │  └─ models.json
│  ├─ layouts
│  │  └─ Layout.astro
│  ├─ pages
│  │  ├─ 404.astro
│  │  ├─ blog
│  │  │  └─ [...slug].astro
│  │  ├─ blog.astro
│  │  ├─ models
│  │  │  └─ [id].astro
│  │  ├─ models.astro
│  │  ├─ contact.astro
│  │  ├─ index.astro
│  │  ├─ joinus.astro
│  │  ├─ legal
│  │  │  ├─ privacy.astro
│  │  │  └─ terms.astro
│  │  ├─ rss.xml.js
│  │  ├─ search.astro
│  │  └─ themes
│  │     └─ in-the-rye.astro
│  ├─ scripts
│  │  ├─ cursor.js
│  │  ├─ dom-utils.js
│  │  └─ script.js
│  └─ styles
│     ├─ bootstrap-grid.css
│     ├─ main.scss
│     ├─ _btn.scss
│     ├─ _common.scss
│     ├─ _layout.scss
│     ├─ _load.scss
│     ├─ _mixins.scss
│     ├─ _reset.scss
│     └─ _typography.scss
└─ tsconfig.json
```


## ⚡ Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |


### Deploying to Vercel

Click the button below to start deploying your project on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/)

### Deploying to Netlify

Click the button below to start deploying your project on Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/)


## 🚀 Quick Start

Follow these steps to quickly set up and run the LuonModels project:

### 1. Download the Project

Obtain the project code through official channels, then clone it to your local, or upload it to platforms like GitHub.


### 2. Install Dependencies

Make sure you have [pnpm](https://pnpm.io/) installed, then run:

```
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your site information:

```
cp .env.example .env
```

Edit the `.env` file and update the required fields:

```
# .env - LuonModels Configuration

# ===== REQUIRED SETTINGS =====
PUBLIC_SITE_URL=https://yourdomain.com/
PUBLIC_SITE_NAME=YourSiteName

# ===== ANALYTICS (OPTIONAL) =====
PUBLIC_GA4_ID=
PUBLIC_UMAMI_ID=
```

### 4. Start the Development Server

Run the local development server:

```
pnpm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser to preview the site.

### 5. Customize Site Content

Edit the JSON or JS files in `/src/config` as needed to configure site information, SEO, footer, social links, etc. For example:

- `/src/config/site.js` — Site settings
- `/src/config/seoTdk.js` — SEO and meta information
- `/src/config/footer.js` — Footer content
- `/src/config/social.js` — Social media links

You can also update model data in `/src/data/models.json`.

### 6. Build and Deploy

When you are ready to launch, first build the site and make sure it runs correctly:

```
pnpm run build
```

Then deploy it to your server or a cloud platform (such as Vercel, Netlify, etc.).

---

## 🌟 Astro Basic Tutorial

If you are new to Astro, refer to the following basic guide:

### What is Astro?

Astro is a modern static site generator that allows you to use your favorite frontend frameworks (such as React, Vue, Svelte) or just plain HTML/CSS/JS. Astro renders pages as static HTML by default, making your site fast and SEO-friendly.

### Astro Directory Structure Overview

- `.astro` files: Astro-specific component or page files.
- `src/pages`: Site pages, each `.astro` file corresponds to a route.
- `src/components`: Reusable UI components.
- `public`: Static assets such as images and icons.

### Editing Content

- To modify text, images, or data, simply edit the relevant component or config file.
- For blog posts, add or edit `.mdx` files in `src/content/blog/`.

### Adding a New Page

1. Create a new file under `src/pages`, for example, `about.astro`.
2. Add content using Astro syntax (write JS/TS logic in the top `---` block, and HTML template below).
3. The new page will be automatically available at the `/about` path.

**Example:**

```
---
const title = "About Us";
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>Welcome to our photography studio!</p>
  </body>
</html>
```

### Common Commands

- `pnpm run dev` — Start the local development server
- `pnpm run build` — Build for production
- `pnpm run preview` — Preview the production build locally

### Official Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro Community Discord](https://astro.build/chat)

---

**Tip:**
For more advanced customization, check out the `src/components` and `src/config` directories, or refer to the official documentation.
