---
title: togo
description: CLI for todo.txt
date: 2020-12-03
tags:
  - go
layout: ../../layouts/PostLayout.astro
setup: |
  import ProjectLink from '../../components/ProjectLink.jsx'
  import Figure from '../../components/Figure.jsx'
---

CLI for `todo.txt` and an attempt at learning Go.

<ProjectLink url="https://github.com/kkga/togo" title="Source code on GitHub" />

### Usage

```
Usage:
  togo [command]

Available Commands:
  add         Add todo
  clean       Move done todos to done.txt
  do          Mark todo as done
  help        Help about any command
  ls          List todos
  rm          Remove todo

Flags:
  -h, --help   help for togo

Use "togo [command] --help" for more information about a command.
```

### Examples

```
> togo ls
 1 [ ] 2020-12-03 Add file configuration
 2 [ ] 2020-12-03 Add support for priorities and `pri`/`depri` command
 3 [ ] 2020-12-03 Improve output for `do` cmd, show final done state
 4 [ ] 2020-12-02 call ls in root cmd if no args
 5 [ ] 2020-12-03 implement viper config
------
5/5 todos shown
```

```
> togo ls config
 1 [ ] 2020-12-03 Add file configuration
 5 [ ] 2020-12-03 implement viper config
------
2/5 todos shown
```

More examples on GitHub: https://github.com/kkga/togo#examples
