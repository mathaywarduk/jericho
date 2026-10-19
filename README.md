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

Images, links and SEO settings aren't editable in the CMS; change them in the files. Images are served from imgix, so blog photos take an imgix filename (e.g. `Jericho_006.jpg`).

The sample menu (`_data/menu.yml`) is one block of text: one course per line, wines start with `Wine:`, and a blank line leaves a gap.

One-off setup:

1. Sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and install the Pages CMS GitHub app on this repo.
2. Open the repo and pick the branch to edit (`develop`).
3. Invite editors by email from the repo's collaborators settings. They don't need a GitHub account.

## Hosting (Netlify)

Netlify builds `develop` using `netlify.toml`. One-off setup in the Netlify dashboard:

1. **Add new site → Import from Git**, choose this repo and set the production branch to `develop`.
2. **Domain management**: add `new.restaurantjericho.com` (staging until go-live) and create the DNS record Netlify asks for.

At go-live, point `restaurantjericho.com` at Netlify. `publish.sh` (GitHub Pages) is no longer needed after that.
