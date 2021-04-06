---
title: Kakoune
date: 2021-04-06
tags:
	- kakoune
	- setup
---

## Poor man's snippets in Kakoune

I wanted a simple, no-plugins solution for inserting various bits of text into
the buffer. Here's what I came up with.

I have a folder of snippet files at `~/.config/kak/snippets/`. Each file is a
`.txt` with the contents of what I want inserted. For example, here's a snippet
for inserting a YAML frontmatter in markdown files.

```txt
---
title: $1
date: $2
tags: $3
--
```

For inserting these snippets, I came up with the following Kakoune command:

```
define-command insert-snippet -params 1 -menu -shell-script-candidates %{
    fd --type file . ~/.config/kak/snippets/ | awk -F '/' '{print $NF}'
} %{ execute-keys "|cat ~/.config/kak/snippets/%arg{1}<ret>s\$\d<ret>n"
} -docstring "poor man's snippets"
```

It populates the command completion menu with filenames from the snippets
folder. Once a snippet is selected:

- it inserts its content into the buffer;
- selects all patterns matching `\$\d` (`$1`, `$2`, etc);
- moves to the first selected pattern.

I can then press `c` to change the content of `$1` and press `n` to select the
next placeholder for changing.

Ideally, it would also automatically change the date placeholder with the output
of `date`, but for now I'm just using a separate `insert-date` command for that:

```
define-command insert-date %{
    execute-keys -draft "|date +%%Y-%%m-%%d<ret>"
} -docstring 'insert current date'
```
