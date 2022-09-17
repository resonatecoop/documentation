---
sidebar_position: 1
---

# Introduction

Let's discover **Resonate in less than 5 minutes**.

## Getting Started

Get started by getting our [music streaming player](https://github.com/resonatecoop/beam) up and running in your development environment.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- A code editor:
  - [VSCode](https://code.visualstudio.com/) is a well-maintained, free option.

### Git workflow
```sh
git clone <the repo you want to clone . git>
git checkout -b <new branch name>

# do work in <new branch>

git status
git add <files you want to add>

# follow commit message guidelines at https://www.conventionalcommits.org
# "chore: feat: fix: cleanup:" are the most commonly used prefixes for Conventional Commits
git commit -m "a commit message here"

# next line will push new branch to main repo. main repo will see new incoming branch and create that branch on the main repo
git push origin <new branch name>

# then, to get later changes in main repo
git checkout main
# this pulls down the latest changes to your machine
git pull origin main
```

### Clone repoźitory

Head over to the [Beam documentation](/docs/active-development/beam) to clone and finalize getting your development environment underway.

Or alternatively, continue on to the [Overview](/docs/overview) if you'd like to learn more about the big picture view for Resonate before diving into development. ⤵️
