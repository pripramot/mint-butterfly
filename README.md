# Jiraphinya

**Tailnext** is a free and open-source template to make your website using **[NextJS](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account best practices.

## Features

- ✅ Integration with **Tailwind CSS** supporting **Dark mode**.
- ✅ **Production-ready** scores in [Lighthouse](https://web.dev/measure/) and [PageSpeed Insights](https://pagespeed.web.dev/) reports.
- ✅ **Image optimization** and **Font optimization**.
- ✅ Fast and **SEO friendly blog**.
- ✅ Generation of **project sitemap** and **robots.txt** based on your routes.

<br>

<img alt="Nice to meet you.:" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1709066864161/2f0133b5-1cba-480c-bb29-e52c919ca637.png?w=1600&amp;h=840&amp;fit=crop&amp;crop=entropy&amp;auto=compress,format&amp;format=webp" decoding="async" data-nimg="responsive" class="mb-0 block w-full" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/tailnext?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/tailnext/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/tailnext#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/tailnext/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/tailnext)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://tailnext.vercel.app/](https://tailnext.vercel.app/)

<br>

## Getting started

- Clone: `git clone https://github.com/onwidget/tailnext.git`
- Enter in the directory: `cd tailnext`
- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- View project in local environment: `localhost:3000`

### Project structure

Inside **Tailnext** template, you'll see the following folders and files:

```
/
├── .storybook/
├── app/
│   ├── (blog)
│   │   ├── [slug]
|   |   |   └── page.js
|   |   └── blog
|   |       └── page.js
│   ├── head.js
│   ├── layout.js
│   └── page.js
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   │── content/
│   |   └── blog/
│   |       ├── demo-post-1.md
│   |       └── ...
│   ├── stories/
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

[![Edit Tailnext on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/tailnext/tree/main)

> **Seasoned next.js expert?** Delete this file. Update `config.mjs` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                       |
| :-------------------- | :------------------------------------------- |
| `npm install`         | Install dependencies                         |
| `npm run dev`         | Starts local dev server at `localhost:3000`  |
| `npm run build`       | Build your production site to `./dist/`      |
| `npm run preview`     | Preview your build locally, before deploying |
| `npm run storybook`   | Open storybook to view stories by widgets    |
| `npm run format`      | Format codes with Prettier                   |
| `npm run lint:eslint` | Run Eslint                                   |

<br>

### Configuration

Coming soon ..

<br>

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/tailnext.git)

#### Deploy to Vercel

Clone this repository on own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Ftailnext)

<br>

## Roadmap

Coming soon ..

<br>

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/tailnext/graphs/contributors).

## License

**Tailnext** is licensed under the MIT license — see the [LICENSE](https://github.com/onwidget/tailnext/blob/main/LICENSE.md) file for details.

```shell
Cr.Phongwut.w content

Back

You're almost done.
Please follow the steps to configure your Project and deploy it.

tailnext
Create Git Repository
Deploy
GIT REPOSITORY
onwidget/tailnext
main
./
Import a different Git Repository →
Browse Templates →
Create Git Repository
To ensure you can easily update your project after deploying it, a Git repository must be created. Every push to that Git repository will be deployed automatically.
pripramot/mint-butterfly

Deploy
Deployment started 2m ago...
Building
2m 22s
Running build in Washington, D.C., USA (East) – iad1
Cloning github.com/pripramot/mint-butterfly (Branch: main, Commit: 71089b0)
Previous build cache not available
Cloning completed: 595.259ms
Running "vercel build"
Vercel CLI 33.5.1
Warning: Detected "engines": { "node": ">=18.17.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
Installing dependencies...
yarn install v1.22.17
info No lockfile found.
[1/5] Validating package.json...
[2/5] Resolving packages...
warning @storybook/nextjs > @storybook/builder-webpack5 > fork-ts-checker-webpack-plugin > memfs@3.6.0: this will be v4
warning @storybook/nextjs > @storybook/builder-webpack5 > webpack-dev-middleware > memfs@3.6.0: this will be v4
[3/5] Fetching packages...
warning sharp@0.33.2: The engine "libvips" appears to be invalid.
warning @img/sharp-libvips-darwin-arm64@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-darwin-arm64@1.0.1: The engine "macos" appears to be invalid.
warning @img/sharp-libvips-darwin-x64@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-darwin-x64@1.0.1: The engine "macos" appears to be invalid.
warning @img/sharp-darwin-x64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-darwin-x64@0.33.2: The engine "glibc" appears to be invalid.
warning @img/sharp-darwin-arm64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-darwin-arm64@0.33.2: The engine "glibc" appears to be invalid.
warning @img/sharp-libvips-linux-arm64@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linux-arm64@1.0.1: The engine "glibc" appears to be invalid.
warning @img/sharp-libvips-linuxmusl-arm64@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linuxmusl-arm64@1.0.1: The engine "musl" appears to be invalid.
warning @img/sharp-linux-arm@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linux-arm@0.33.2: The engine "glibc" appears to be invalid.
warning @img/sharp-libvips-linuxmusl-x64@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linuxmusl-x64@1.0.1: The engine "musl" appears to be invalid.
warning @img/sharp-linux-s390x@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linux-s390x@0.33.2: The engine "glibc" appears to be invalid.
warning @img/sharp-libvips-linux-s390x@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linux-s390x@1.0.1: The engine "glibc" appears to be invalid.
warning @img/sharp-linux-x64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linux-x64@0.33.2: The engine "glibc" appears to be invalid.
warning @img/sharp-wasm32@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linuxmusl-arm64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linuxmusl-arm64@0.33.2: The engine "musl" appears to be invalid.
warning @img/sharp-linuxmusl-x64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linuxmusl-x64@0.33.2: The engine "musl" appears to be invalid.
warning @img/sharp-win32-x64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-win32-ia32@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linux-x64@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linux-x64@1.0.1: The engine "glibc" appears to be invalid.
warning @img/sharp-libvips-linux-arm@1.0.1: The engine "pnpm" appears to be invalid.
warning @img/sharp-libvips-linux-arm@1.0.1: The engine "glibc" appears to be invalid.
warning @img/sharp-linux-arm64@0.33.2: The engine "pnpm" appears to be invalid.
warning @img/sharp-linux-arm64@0.33.2: The engine "glibc" appears to be invalid.
[4/5] Linking dependencies...
warning "@storybook/nextjs > postcss-loader@7.3.4" has unmet peer dependency "webpack@^5.0.0".
warning "@storybook/nextjs > style-loader@3.3.4" has unmet peer dependency "webpack@^5.0.0".
warning "@storybook/nextjs > sass-loader@12.6.0" has unmet peer dependency "webpack@^5.0.0".
warning "@storybook/nextjs > node-polyfill-webpack-plugin@2.0.1" has unmet peer dependency "webpack@>=5".
[5/5] Building fresh packages...
success Saved lockfile.
Done in 83.65s.
Detected Next.js version: 14.1.0
Running "yarn run build"
yarn run v1.22.17
$ next build
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
   ▲ Next.js 14.1.0
   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/16) ...

   Generating static pages (4/16) 

   Generating static pages (8/16) 

   Generating static pages (12/16) 

 ✓ Generating static pages (16/16) 
   Finalizing page optimization ...
   Collecting build traces ...
Route (app)                              Size     First Load JS
┌ ○ /                                    4.41 kB         107 kB
├ ○ /_not-found                          885 B          85.1 kB
├ ● /[slug]                              292 B          89.4 kB
├   ├ /demo-post-1
├   ├ /demo-post-2
├   ├ /demo-post-3
├   └ /demo-post-4
├ ○ /about                               4.36 kB         107 kB
├ ○ /blog                                187 B          96.1 kB
├ ○ /contact                             1.13 kB         104 kB
├ ○ /faqs                                3.24 kB         106 kB
├ ○ /pricing                             1.86 kB        97.8 kB
├ ○ /privacy                             140 B          84.3 kB
├ ○ /services                            953 B          96.9 kB
└ ○ /terms                               140 B          84.3 kB
+ First Load JS shared by all            84.2 kB
  ├ chunks/69-99377b6db6a9769e.js        28.9 kB
  ├ chunks/fd9d1056-8274383bafd9d60d.js  53.4 kB
  └ other shared chunks (total)          1.89 kB
○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses getStaticProps)
$ next-sitemap
✨ [next-sitemap] Loading next-sitemap config: file:///vercel/path0/next-sitemap.config.js
✅ [next-sitemap] Generation completed
┌───────────────┬────────┐
│    (index)    │ Values │
├───────────────┼────────┤
│ indexSitemaps │   1    │
│   sitemaps    │   1    │
└───────────────┴────────┘
-----------------------------------------------------
 SITEMAP INDICES 
-----------------------------------------------------
   ○ https://tailnext.vercel.app/sitemap.xml
-----------------------------------------------------
 SITEMAPS 
-----------------------------------------------------
# ○ https://tailnext.vercel.app/sitemap-0.xml
- Done in 38.77s.
- Traced Next.js server files in: 62.998ms
- Created all serverless functions in: 2.016s
- Collected static files (public/, static/, .next/static): 8.524ms
- Build Completed in /vercel/output [2m]
- Deploying outputs...
- Deployment Summary
- Assigning Custom Domains
Initial commit - 71089b
Project Limit Reached

## This Personal Account Avatar for pripramotPripramot Wechabut has reached the 200 project Hobby limit.

To continue, please create a Pro team or select a different account.

Learn more about Project Limits

New Project – Vercel
```
