---
sidebar_position: 1
---

# Overview

A high level overview of the Resonate tech stack. [What does a professional DSP look like](https://community.resonate.coop/t/resonate-what-does-a-professional-dsp-look-like/2837) provides a tentative roadmap of our long-term goals. To gain a better understanding of our immediate goals and tasks, check out our [Public Product Backlog](https://mattermost.resonate.coop/plugins/focalboard/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/shared/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho?r=kwx8xtyxwcpmqsnh67iz8x74p7a).

In September of 2022, Resonate [set a goal](https://community.resonate.coop/t/dev-decisions-log/3136): to create a functional development environment and to [simplify the entire tech stack](https://mattermost.resonate.coop/boards/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho/cnxsmedm3p7n8mff6dbda8q5i5y). This is to prepare Resonate to meet the needs of the [DSP Product Development Plan](https://mattermost.resonate.coop/boards/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho/ce533e4ndgjnxxr9xgjri3e9x6y).

As a result, the assets that are currently on our live servers should be considered a prototype. These legacy assets are more or less considered to be in Maintenance Mode as we consolidate the server API into one repository: **[api](https://github.com/resonatecoop/api)**. Initially, we'll move all legacy JavaScript microservices into this consolidated repository, following that, the server assets written in Go (namely **[id](https://github.com/resonatecoop/id)** and **[user-api](https://github.com/resonatecoop/user-api)**) will be incorporated/adopted as well.

We want to provide a consolidated back-end API one Docker command to spin up the whole back-end, in a shippable package, one container that is easy to install, plug, and play. This will in tandem help us further grow our open source ecosystem, speed up development for the long-term, and facilitate onboarding new dev contributors.

### Active Development

Resonate's API is undergoing a consolidation phase, pulling in functionality from multiple legacy repositories into one, the **[api](https://github.com/resonatecoop/api)**. The **[api](https://github.com/resonatecoop/api)** repository is experimental, and under very active development - expect things to change rapidly. The **[beam](https://github.com/resonatecoop/beam)** app (an Electron app written in TypeScript/React) can be run in the web browser, and will eventually replace the live web player. As we develop and build out **[api](https://github.com/resonatecoop/api)**, **[beam](https://github.com/resonatecoop/beam)** will be the go-to front-end client for testing. Because we aim to build an open-source [Accounting Engine](https://community.resonate.coop/t/resonate-what-does-a-professional-dsp-look-like/2837) with automatic reporting with digestion of [DDEX Electronic Release Notification Message Suite Standard (ERN)](https://mattermost.resonate.coop/boards/workspace/gr3aqjbmw3d7fp3wukfw7hhppr/bzkz3bnxxsbny3doh9aqhqy8cth/vzfpkzytdq3rkfjjwzagshoyrho/ccp8xbk8jsjg83xcs6qaauydw6y) data, the current focus is primarily on the back-end.

That being said, some of this work can occur in parallel. For volunteers looking to get their toes wet or to tackle a quick issue, helping out with our actively maintained front-end clients (**[beam](https://github.com/resonatecoop/beam)** and **[mobile](https://github.com/resonatecoop/mobile)**) would be massively helpful. Check out the [Beam Project Board](https://github.com/resonatecoop/beam/projects/1) or the [Mobile Project Board](https://github.com/resonatecoop/mobile/projects/1) to get a better idea of prioritization. If you're a volunteer feeling rather ambitious, check out the [API Project Board](https://github.com/orgs/resonatecoop/projects/11) for an idea of issue/task prioritization for the back-end.

See something in this documentation that could be improved or is out-of-date? Click the **Edit this page** button at the bottom of any page on this website to submit a correction/improvement, or alternatively create an issue on the **[documentation](https://github.com/resonatecoop/documentation)** repository.

### Legacy Assets on Live Servers

**[Resonate ID Server](https://github.com/resonatecoop/id)** - a golang server that acts as our "authentication" portal. It's primarily used to provide login and authentication for client apps, which includes the `stream` app (though this version isn't live for Resonate yet), the `dashboard`, and, for example `beam`, which is a third party app.

**[Resonate User API](https://github.com/resonatecoop/user-api)** - this is primarily a database that stores all the user information and has some user management methods and functionality associated with it. It also is a golang server.

**[Tracks API](https://github.com/resonatecoop/tracks-api)** - a thin nodejs sequelize API that provides access to the tracks database, serving streaming information, etc.

**[Stream](https://github.com/resonatecoop/stream) & [Dashboard](https://github.com/resonatecoop/dashboard)** - These are two different webapps. The `stream` app is a choo based javascript app that allows streaming, while the `dashboard` app allows track management and upload. The `dashboard` API also contains some code that is partially duplicated with `tracks-api` mentioned above, so there are plans to merge those.

There are also some smaller services that handle uploading of files (audio and images) and some other things as well.

This can all run on one server (it needs to!) with access to distinct databases on that server. There can be subdomains for the top level domain, that will be needed in this situation (for example, but no guarantee: `id.<domain>`, `api.<domain>`, `stream.<domain>`.

All of these use docker for container management, and are spun up and restarted using docker.
