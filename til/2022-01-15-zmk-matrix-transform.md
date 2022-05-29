---
title: Transforming a keyboard matrix in ZMK
date: 2022-01-15
tags:
    - zmk
    - keyboard
---

I've had an issue with [ZMK](https://zmk.dev) when I wanted to use my existing
34-key keymap for a new keyboard which has more keys.

After a brief look at the source code of keyboard definitions, I found that one
can apply a transform in keymap file which maps listed keys to specific switches
on the board.

```c
// this is the keymap file for your keyboard (e.g. corne-ish-zen.keymap)

// include the keymap file with your layout
#include "34keys.keymap"
// include the matrix transform definitions from ZMK (used below)
#include <dt-bindings/zmk/matrix_transform.h>

/ {
    chosen {
        // apply the transfrom defined below
        zmk,matrix_transform = &thirty_four_key_transform;
    };

    thirty_four_key_transform: keymap_transform_2 {
    compatible = "zmk,matrix-transform";
    columns = <10>;
    rows = <4>;
      // map keys listed in your keymap to specific switches on the board
      // | SW2  | SW3  | SW4  | SW5  | SW6  |   | SW6  | SW5  | SW4  | SW3  | SW2  |
      // | SW8  | SW9  | SW10 | SW11 | SW12 |   | SW12 | SW11 | SW10 | SW9  | SW8  |
      // | SW14 | SW15 | SW16 | SW17 | SW18 |   | SW18 | SW17 | SW16 | SW15 | SW14 |
      //                      | SW20 | SW21 |   | SW21 | SW20 |
            map = <
      RC(0,1) RC(0,2) RC(0,3) RC(0,4) RC(0,5)  RC(0,6) RC(0,7) RC(0,8) RC(0,9) RC(0,10)
      RC(1,1) RC(1,2) RC(1,3) RC(1,4) RC(1,5)  RC(1,6) RC(1,7) RC(1,8) RC(1,9) RC(1,10)
      RC(2,1) RC(2,2) RC(2,3) RC(2,4) RC(2,5)  RC(2,6) RC(2,7) RC(2,8) RC(2,9) RC(2,10)
                              RC(3,4) RC(3,5)  RC(3,6) RC(3,7)
            >;
    };
};
```
