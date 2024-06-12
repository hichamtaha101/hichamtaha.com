# README

The following document describes the steps necessary to get the Nuxt website up and running.

### What is this Repository for?

This repository is used to scaffold a nuxt project for speedy static landing page / website developments.

### How to Setup / Scripts
-   `yarn dev` Serve with hot reload at localhost:3069.
-   `yarn build` Build for production.
-   `yarn start` Launch server.
-   `yarn generate` Generate static project in the /dist folder. Used for static hosting on S3.
-   `yarn vs-extensions` Installs all necessary and complimentary vscode extensions for this project.

### Linting

1. In visual studio code, ensure you have the following plugins by running `yarn vs-extensions`.
    - stylelint
    - ESLint
    - Prettier
    - Tailwind CSS IntelliSense
    - Vetur

2. Settings are located in .vscode/settings.json. Linting is based off airbnb-base plugin.

### Directory Layout
```bash
├── .vscode/                    # Prettier setting with linting for front-end/back-end.
├── assets/                     # All assets relating to the project.
    ├── css                     # Global postcss styles. 
        ├── mixins              # Global postcss mixins.
    ├── images                  # Website and project images.
    ├── fonts                   # Project font files.
├── components/                 # Global components to be used across all page components.
├── .nuxt/                      # Distributed client side files to serve for static hosting.
├── layouts/                    # Page layouts, like admin, dashboard, login, etc.
├── node_modules/               # NPM packages.
├── pages/                      # Nuxt page based components.
├── plugins/                    # Third party plugins for Nuxt/Vue app.
├── static/                     # Static files to be accessed via public routes.
├── store/                      # Vuex for state global management.
├── .gitignore                  # Files to ignore in bitbucket/github.
├── .prettierignore             # Files to ignore prettier triggers from.
├── nuxt.config.js              # Nuxt configurations.
├── package.json                # Core dependencies, scripts, and project details.
├── postcss.config.js           # Postcss configurations.
├── tailwind.config.js          # Tailwind configurations.
```