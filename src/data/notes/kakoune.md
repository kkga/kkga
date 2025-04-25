---
date: 2021-08-17
tags:
  - kakoune
---

# Kakoune

## My plugins

### ui.kak

- https://gitlab.com/vbauerster/dotfiles/-/blob/master/.config/kak/highlighters.kak

---

## Configuration intro

- coming from vim, especially if you’ve used a lot of plug-ins, initial Kakoune
  setup can be challenging
- Because ok Kakoune’s minimalistic nature, a lot of vim-like niceties can be
  hard to configure
- For browsing buffers and files, pick you menu-like tool of choice (fzf, dmenu,
  wofi etc) and define commands in Kakoune that interact with the menu
- Searching file contents can also be delegated to an external UI, however
  Kakoune provides a somewhat integrated solution: a customizable `grep` command
  that executes you shell program of choice (eg ripgrep) and populates a new
  buffer with the results. It’s easy to navigate with previous/next commands
- LSP was easy to configure; compared to Neovim’s new integrated LSP, kak-Lsp
  works almost out of the box with minimal requires configuration. It’s fast and
  has support for a wide range languages.

## Config examples

- [ ] https://github.com/Parasrah/kak-config
- [ ] https://github.com/gf3/dotfiles/blob/main/.config/kak/kakrc
- [ ] https://github.com/Hejsil/dotfiles/blob/master/.config/kak/kakrc
- [ ] https://github.com/caksoylar/dotfiles/blob/master/kak/kakrc
- [ ] https://github.com/ifreund/dotfiles/blob/trunk/config/kak/kakrc

## Interesting plugins

- more objects https://github.com/gustavo-hms/objetiva
- lua scripting https://github.com/gustavo-hms/luar
- https://github.com/basbebe/modeline-extras.kak
