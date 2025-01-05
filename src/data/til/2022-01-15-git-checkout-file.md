---
title: Checkout files from another branch in git
tags:
    - git
---

Say you're on branch `foo` and you need to grab some files from branch `bar`.

Turns out, [`git-checkout`](https://git-scm.com/docs/git-checkout) can help:

```shell
# on branch foo
git checkout bar path/to/file
```
