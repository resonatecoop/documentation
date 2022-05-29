---
sidebar_position: 3
---

Explore the <code>[id](https://github.com/resonatecoop/id)</code> server repository...

# Resonate ID

Resonate's ID server is a Go OAuth2 Server based on [RichardKnop/go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server).

* [Setup](#setup)
* [Run](#run)
* [Deploy](#deploy)

See also

* [OAuth 2.0](docs/oauth2.md)
* [Environment](docs/environment.md)
* [Docker](docs/docker.md)
* [Plugins](docs/plugins.md)
* [Tests](docs/tests.md)

## Setup

There are three setup tasks when working with the ID server

1. Setup the config store
2. Setup the data stores
3. Compile the server

### Config Store

The ID server uses [etcd](https://github.com/etcd-io/etcd) as a config store.

Install etcd (if needed, and platform specific) and run it

```
brew install etcd
etcd
```

Load the sample config and verify it

```
etcdctl put /config/go_oauth2_server.json "$(cat ./config.sample.json)"
etcdctl get /config/go_oauth2_server.json
```

### Data Store

At some point, we will be merging both the ID server and User API repos. Until then, the ID server needs a direct database connection to the User API.

Using [resonatecoop/user-api-client](https://github.com/resonatecoop/user-api-client), the ID server can also make RESTful requests to the User API.

#### User API

(How to setup the User API locally, check out [user-api](https://github.com/resonatecoop/user-api) github repository)

### Compile

To compile the server run

```
go install .
```

## Run

Run the server

```
go-oauth2-server runserver
```

## Deploy

(How to deploy to staging and production using [docker](docs/docker.md))

## Develop

Add a git hook for proper formatting
```
./add_gofmt_hook.sh
```
