---
tags:
  - keyboard
---

# keyboard layouts

## Keyboards

- https://aposymbiont.github.io/split-keyboards/

## 34-36 key layouts

- https://github.com/filterpaper/zmk-config (hypergolic)

## interesting layouts

- https://github.com/jackrosenthal/threelayout
- https://github.com/rafaelromao/qmk_firmware/blob/rafaelromao/users/rafaelromao/readme.md
- https://www.reddit.com/r/olkb/comments/qms7w1/getreuerqmkkeymap_github_repo_of_qmk_firmware/

## Atreus programming layout

I have a highly customized layout. Hopefully something in here is helpful...

Here's my base layer:

```
Z    L    D    W    F                Q    Y    O    U    '
R    N    T    S    G                J    H    E    I    A
---  X    M    B    C    V      `    K    P    ,    .    /
esc  tab  #3   sup  shft ctrl   alt  spc  #1   #2   bksp enter
```

For the purpose of this post, you can ignore my idiosyncratic alphabetic
layout - the important part here is the bottom row. The keys labelled #1, #2, #3
are layer shift keys (and --- is "blocked"). And #3 is just a French layer, so
that won't be important here either

Layer 2 is digits and symbols:

```
!    <    >    =    +                &    7    8    9    :
{    (    )    }    -                0    1    2    3    ;
@    [    ]    *    ^    |      ---  $    4    5    6    _
\    #    %    sup  shft ctrl   alt  spc  #1   ---  ---  ---
```

I rearranged the numpad so that the lowest digits are on the home row. Matching
delimiters are arranged symmetrically on the left hand. The backslash is over
escape, which is kind of a pun. I also added duplicates of < and > (which are
available on the base layer via shift-, and shift-.) to make easy combos for !=,
<=, >=, =>, ->, and <-. By using the wrong finger for =, I can also do pretty
comfortable combos for += and -=

Finally, layer 3 is navigation and function keys:

```
---  F9   F8   F7   F12              pgup home ↑    end  mute
caps F3   F2   F1   F11              pgdn ←    ↓    →    volup
---  F6   F5   F4   F10  prsc   ---  $    prev play next voldn
esc  sclk paus sup  shft ctrl   alt  spc  ---  #2   del  ---
```

I hold #2 with my thumb. The arrows and home/end/pgup/pgdn are on the right hand
so that it's easy to hit them in combination with ctrl, shift, or ctrl+shift.
The F1-F9 keys are a mirror image of the numpad and can easily be combined with
alt for e.g. alt-F2 or alt-F4
