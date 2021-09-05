---
title: Automatic session management in Kakoune
date: 2021-09-05
tags:
  - kakoune
  - setup
---

[Kakoune](https://github.com/mawww/kakoune) has a client-server architecture,
which makes it easy to integrate with other tools.

For example, start a new session with:

```sh
kak -s myproject
```

... lets you connect a new client to it with:

```sh
kak -c myproject
```

... or send commands to the given client as stdin to the session:

```sh
echo eval -client client0 edit README.md | kak -p myproject
```

This makes integration with other tools possible. For example, you could pick a
file in a terminal with fzf and open it in a given Kakoune client and session
with:

```sh
fzf | xargs -I {} echo eval -client client0 edit '{}' | kak -p myproject
```

[kakoune.cr](https://github.com/alexherbo2/kakoune.cr) is a brilliant tool that
removes the need to handle all of this manually.

However, management of Kakoune sessions is still up to the user. Simply running
`kak my_file` will always create a new session to open the given file.

With `kakoune.cr`, you can set the
["context"](https://github.com/alexherbo2/kakoune.cr#how-does-it-work) for any
command to execute in the relevant session/client, but you still need to create
that session upfront.

Most of the time, I ended up having multiple Kakoune windows editing related
files in separate, disconnected sessions, because I forgot creating a single
session for the project upfront. This makes navigating between buffers
frustrating as.

As a solution, I've been using the following wrapper script (`kaks`) as a global
`EDITOR` value in shell. It automates session handling based on where it's
called:

- if there is a `kakoune.cr` session in context (`KAKOUNE_SESSION` is set), it
  passes the arguments to it, so programs connected with `kakoune.cr` work as
  expected;
- if the file is inside git directory, it tries to connect to an existing
  session based on directory name or creates a new one;
- otherwise, it just uses the `default` session, which in my case is
  automatically started by desktop with the following script:
  [kakdaemon](https://github.com/kkga/dotfiles/blob/master/.local/libexec/kakdaemon).

Here is the full script
([file on GitHub](https://github.com/kkga/dotfiles/blob/master/.local/bin/kaks)):

```sh
#!/bin/sh
# Kakoune wrapper. Used as "EDITOR=kaks".
# Uses kcr (https://github.com/alexherbo2/kakoune.cr) session, if it exists.
# Otherwise, if inside a git directory, creates or connects to an existing session for it.
# Otherwise, uses the 'default' session, which is started automatically by desktop.

wait_for_session() {
	session=$1
	# Wait for session
	# Grep in quiet mode with fixed strings and whole line switches
	while ! kak -l | grep -q -F -x "$session"; do
		sleep 0.1
	done
}

kak -clear # clear dead sessions

# if there's a krc session, just use it
if [ -n "$KAKOUNE_SESSION" ]; then
	kcr edit "$@"
# if the file is inside a git dir, try connect to a an existing session based on directory name or create a new one
elif [ "$(git rev-parse --show-toplevel 2> /dev/null)" ]; then
	git_dir=$(basename "$(git rev-parse --show-toplevel | tr -d '.')")
	existing_session=$(kak -l | grep "$git_dir")
	[ -z "$existing_session" ] && setsid kak -d -s "$git_dir" &
	wait_for_session "$git_dir"
	kak -c "$git_dir" "$@"
# Otherwise use the 'default' session
else
	kak -c "default" "$@"
fi
```

I've been using this setup for a few months and it completely removed the need
to manually handle sessions in my case.

Every time I start working on a git-tracked project or open a file inside it
from terminal, the correct session is selected or created automatically.
