# Restaurant Jericho website

## Uses

- Jekyll ([jekyllrb.com](https://jekyllrb.com/))
- Tailwind ([tailwindcss.com](https://tailwindcss.com/))
- PostCSS ([postcss.org](https://postcss.org/))


## Installation

### 1. Install Jekyll

Follow the instructions at: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

### 2. Install packages

```console
bundle install
npm install
```

### 3. Run it

```console
bundle exec jekyll serve
```

## Editing content (Pages CMS)

The words on every page, the sample menu, site-wide text (`_data/site_text.yml`) and blog posts are edited with [Pages CMS](https://pagescms.org/), configured in `.pages.yml`. Saving commits to the repo, and Netlify rebuilds the site.

Page images, links and SEO settings aren't editable in the CMS; change them in the files. Page images are imgix filenames (e.g. `Jericho_006.jpg`), served from `site.image_base`.

Blog photos are uploaded through the CMS into `assets/images/uploads/` and resized by [Netlify Image CDN](https://docs.netlify.com/build/image-cdn/overview/) (see `_includes/image.html`). Hosted Pages CMS can't upload files over about 3MB, so editors need to shrink phone photos first. Locally, uploaded photos are served full size.

The sample menu (`_data/menu.yml`) is one block of text: one course per line, wines start with `Wine:`, and a blank line leaves a gap.

One-off setup:

1. Sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and install the Pages CMS GitHub app on this repo.
2. Open the repo and pick the branch to edit (`develop`).
3. Invite editors by email from the repo's collaborators settings. They don't need a GitHub account.

## Hosting (Netlify)

The site is hosted on Netlify, which builds the `develop` branch using `netlify.toml` whenever it changes, including saves from Pages CMS. There's no manual publish step.

DNS is on Cloudflare: `restaurantjericho.com` is a CNAME to `apex-loadbalancer.netlify.com` and `www` a CNAME to `restaurantjericho.netlify.app`, both set to DNS only (grey cloud) so Netlify can issue the HTTPS certificate. Email (MX) is Google and is separate.

Builds run with `JEKYLL_ENV=netlify`: development mode needs jekyll-postcss's dev server, which won't start without an open stdin, and production mode breaks jekyll-minifier on `assets/js/app.js`.
