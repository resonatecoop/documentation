> 🛠 **Status: Active Development | Stable**
>
> This project is currently in development.

# Resonate Documentation

These docs are built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

View the [GitHub Project Board](https://github.com/resonatecoop/documentation/projects/2) to track work progress and management for this repository.

### Installation

```sh
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window at http://localhost:3000. Most changes are reflected live without having to restart the server.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Serve
```sh
yarn serve
```

### Deployment

Using SSH:

```
USE_SSH=true yarn deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
