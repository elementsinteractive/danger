[![npm version](https://badge.fury.io/js/@makerstreet%2Fdanger.svg)](https://badge.fury.io/js/@makerstreet%2Fdanger)

# Elements Danger module

> Shared Danger checks for Elements projects

## Contents

- [Goal of this library](#goal-of-this-library)
- [Supported platforms](#supported-platforms)
- [Installation](#installation)
- [CLI Usage](#cli-usage)

## Goal of this library

Danger is a CI tool we use to perform checks during a Merge Request. This library includes all our common and platform specific Danger checks.

## Supported platforms

- Android

## Installation

As a dev dependency

```bash
$ npm install -D @makerstreet/danger
```

If you use yarn:

```bash
$ yarn add @makerstreet/danger --dev
```

## CLI Usage

At a glance:

```js
// dangerfile.js
import dangerElements from '@elements/danger'

dangerElements()
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
