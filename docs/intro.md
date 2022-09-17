---
sidebar_position: 1
---

# Introduction

Let's discover **Resonate in less than 5 minutes**.

## Getting Started

The simplest way to get started is by getting our [music streaming player](https://github.com/resonatecoop/beam) up and running in your development environment.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- A code editor:
  - [VSCode](https://code.visualstudio.com/) is a well-maintained, free option.

### Git workflow
If this is your first time contributing, you should fork the repository, and then clone your fork. Otherwise, simply clone the repository you want to work on:
```sh
git clone <the repo you want to clone . git>
git checkout -b <new branch name>
```

Do work the work, and then add any files you want to commit:
```sh
git status
git add <filename>
```

Follow [Conventional Commits](https://www.conventionalcommits.org) guidelines (`chore:`, `feat:`, `fix:`, `cleanup:` are common commit message prefixes), and make your commit:
```sh
git commit -m "<prefix>: short commit message"
```

Push your new branch online to create a merge request:
```sh
git push origin <new branch name>
```

Then, to get later changes from the repository, go back to your `main` branch:
```sh
git checkout main
```

Now, to pull down the latest if you cloned Resonate's repository:
```sh
git pull origin main
```

Or, to pull down the latest if you cloned your fork:
```sh
git pull upstream main
```

### Clone repository

Head over to the [Beam documentation](/docs/active-development/beam) to clone and finalize getting your development environment underway.

Or alternatively, continue on to the [Overview](/docs/overview) if you'd like to learn more about the big picture view for Resonate before diving into development. ⤵️
