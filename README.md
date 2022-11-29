![image](public/cover.jpg)

## فريق النخبة المطورين

نادي طلابي لتطوير المهارات التقنية وتطوير الحلول التكنولوجية للمجتمع
المحلي، الفريق ضمن مشروع قادة التحوّل الرقمي التابع رسميًا إلى جامعة
البصرة، كلية علوم الحاسوب وتكنولوجيا المعلومات.

![image](assets/logo.svg)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Static Hosting

Pre-render the website to be deployed on any static hosting:

```bash
npm run generate
```

The `dist/` directory is ready to be deployed (symlink to `.output/public`), [learn more on Nuxt docs](https://v3.nuxtjs.org/guide/deploy/static-hosting).

### Node server

Build the application for production:

```bash
npm run build
```

Start the server in production:

```bash
node .output/server/index.mjs
```

Learn more on [Nuxt docs](https://v3.nuxtjs.org/guide/deploy/node-server) for more information.
