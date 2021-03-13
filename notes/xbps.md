---
title: XBPS
description: A short guide on working with the Void Linux package repository.
tags:
   - software
   - linux
   - void
---


Void provides a comprehensive [manual][manual] on how to work with the source packages.
This guide is focused on a small subset of tasks I often do myself.

[manual]: https://github.com/void-linux/void-packages/blob/master/Manual.md

## Prerequisites

1. Clone the `void-packages` repository and do the initial bootstrap:

```
$ git clone git://github.com/void-linux/void-packages.git
$ cd void-packages
$ ./xbps-src binary-bootstrap
```

2. Install the `xtools` package:

```
$ xbps-install -S xtools
```

3. Install and setup [GitHub CLI](https://cli.github.com/):

```
$ xbps-install -S github-cli
$ gh auth login
```

## Updating an outdated package

1. Update your local repository:

```
$ git pull
```

2. Make changes to package template in a new git branch (most of the time you
   only need to update the `version`):

```
$ git checkout -b package-name
$ vim srcpkgs/package-name/template
```

3. Update the checksum:

```
$ xgensum -f -i package-name
```

4. Lint the template for possible errors:

```
$ xlint package-name
```

5. Build and install the updated package locally:

```
$ ./xbps-src pkg package-name
$ xi package-name
```

6. Test the package to make sure it works;
7. Generate a commit message for the update:

```
$ xbump package-name
```

8. Create a PR:

```
$ gh pr create
```
