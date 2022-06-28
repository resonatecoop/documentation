---
sidebar_position: 1
---

# Overview

A high level overview of the Resonate tech stack.

> Note: this is an "ideal" version of the stack. See the section "caveats" at the bottom for more explanation.

**Resonate ID Server** - a golang server that acts as our "authentication" portal. It's primarily used to provide login and authentication for client apps, which includes the stream app (though this version isn't live for Resonate yet), the dashboard, and, for example beam, which is a third party app.

**Resonate User API** - this is primarily a database that stores all the user information and has some user management methods and functionality associated with it. It also is a golang server.

**Tracks API** - a thin nodejs sequelize API that provides access to the tracks database, serving streaming information, etc.

**Stream & Dashboard** - These are two different webapps. The stream app is a choo based javascript app that allows streaming, while the dashboard app allows track management and upload. The dashboard API also contains some code that is partially duplicated with tracks-api mentioned above, so there are plans to merge those.

There are also some smaller services that handle uploading of files (audio and images) and some other things as well.

This can all run on one server (it needs to!) with access to distinct databases on that server. There can be subdomains for the top level domain, that will be needed in this situation (for example, but no guarantee: `id.<domain>`, `api.<domain>`, `stream.<domain>`.

All of these use docker for container management, and are spun up and restarted using docker.

## Caveats

Resonate is currently in the middle of a transition from using WordPress as user management software.

