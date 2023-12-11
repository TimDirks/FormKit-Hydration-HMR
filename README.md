# FormKit Nuxt Recursive warning

A reproducible example to get the `Maximum recursive updates exceeded in component <FormKitSchema>` warning from Vue.

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
3. In your IDE, open any `.vue` file and change something in the script tag (like adding a simple comment)
4. Save the file changes
5. Hot Module Reload should trigger and after that a warning should appear in your console stating `Maximum recursive updates exceeded in component <FormKitSchema>`.
