# FormKit Nuxt Hydration warning

A reproducible example to get the Hydration warning from Vue when page reload triggers.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Steps to reproduce warning

1. Start the development server and open it in your browser.
2. Open the developer tools to check the console output.
3. On initial page load, no hydration warnings should appear.
4. When you refresh the page, hydration warnings should appear stating that the `name` attribute mismatches between client and server.