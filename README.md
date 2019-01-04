# pentiJS

Use the number keys `1`, `2`, `3`, `4` and `any` other key to simulate the hand, only left hand mode is supported at the moment.

## Implemented 

```
---- #    |   SPACE   |
-#-- #    |   A       |   #--- -    |   N
-##- #    |   B       |   -##- -    |   O 
-#-# -    |   C       |   -### #    |   P 
#--- #    |   D       |   -#-# #    |   Q
--#- -    |   E       |   --#- #    |   R 
---# #    |   F       |   ---# -    |   S 
##-- -    |   G       |   ###- #    |   T 
#--# #    |   H       |   -### -    |   U 
-#-- -    |   I       |   ##-# -    |   V 
#--# -    |   J       |   #### #    |   W 
#### -    |   K       |   ##-# #    |   X 
--## -    |   L       |   ##-- #    |   Y 
###- -    |   M       |   --## #    |   Z 
```

## Full Specs

As per [this](https://software-lab.de/penti.html).

```
Penti Chorded Keyboard

Chord       SHIFT        PUNCT        DIGIT        ALTGR        FUNCT
---------------------------------------------------------------------
# ----      SPACE        SPACE        SPACE        SPACE         NEW
# --#-        A            `            6            ä            F6
# -##-        B            {           LEFT          å          BREAK
- #-#-        C            ]            ,            ĉ           COPY
# ---#        D            /            .                        DEF
- -#--        E            [            2            é            F2
# #---        F            ?            4            ¿            F4
- --##        G            =            9            ĝ            F9
# #--#        H            #           HOME          ĥ           HELP
- --#-        I            !            3            í            F3
- #--#        J            ;            :            ĵ
- ####        K            @                                    RESET
- ##--        L            _            7                         F7
- -###        M            >            -            —           F12
- ---#        N            )          RIGHT          ñ           NUM
- -##-        O            |            8            ö            F8
# ###-        P            }            +                       PASTE
# #-#-        Q            '           PGUP                      QUIT
# -#--        R            $            5            €            F5
- #---        S            *            1            ß            F1
# -###        T            %            ~
- ###-        U            &            0            ü           F10
- #-##        V            (           DOWN          ŭ
# ####        W            <           INS
# #-##        X            \          PGDOWN                   PASTE2
# --##        Y            ^            UP           ÿ
# ##--        Z            "           END           ŝ           F11
- -#-#      RESET        RESET        RESET        RESET        RESET
- ##-#      RESET        RESET        RESET        RESET        RESET
# -#-#      RESET        RESET        RESET        RESET        RESET
# ##-#      RESET        RESET        RESET        RESET        RESET

Arpeggio
---------------------------------------------------------------------
# #---   SHIFT       - #--#   ALTGR         # ##--   ^Z
# -#--   PUNCT       - -##-   FUNCT         # -##-   ^B
# --#-   DIGIT       - #-#-   RET/ESC       # --##   ^Y
# ---#   CNTRL       - ##--   TAB/DEL

Mnemo
---------------------------------------------------------------------
- #---  S      # -#--  R      # #---  F      # ##--  Z      # ###-  P
- -#--  E      # --#-  A      - ##--  L      - ###-  U      - ####  K
- --#-  I      # ---#  D      - -##-  O      - -###  M      # ####  W
- ---#  N                     - --##  G

# -##-  B      - #-#-  C      # #-#-  Q
# --##  Y      - #--#  J      # #--#  H
# -###  T      - #-##  V      # #-##  X

- #---  1      # #---  4      - ##--  7      - ###-  0
- -#--  2      # -#--  5      - -##-  8
- --#-  3      # --#-  6      - --##  9


Usage
-----

The "Chord" column can be read this way:

  - ---#   Only the little finger is pressed
  - #--#   Index and little finger are pressed simultaneously
  # ----   Only the thumb is pressed
  # ####   All five fingers are pressed simultaneously

With 5 bits we could have 31 combinations. However, combinations where the
ring finger is up while its neighbors are down is physiologically
problematic. Therefore, 4 combinations (those with "RESET" in the table) are
not used for normal keys, leaving 27 combinations: 26 letters plus space.

Some key combinations exist in two forms: As "chord" and as "arpeggio". If
these keys are not pressed simultaneously, but slightly (>= 80 ms) one after
the other, they are taken as an "arpeggio". In that case it depends on which
finger was pressed first (the "direction"), giving two different results.

Arpeggios are much easier to type than to explain. The rules for a
combination to be taken as an arpeggio (instead of a chord) are:

1. The last key must be pressed AT LEAST 80 ms later than the second.
2. The last key must be pressed MAXIMALLY 240 ms.

For example, a backspace (DEL) is generated with middle and index finger.
While pressing middle and index finger simultaneously (or longer than 240 ms)
gives an "l", you get a backspace when you first press the middle finger (as
long as you like, but at least 80 ms), then make a *short* tap with the index
finger and immediately release both fingers.

If you generate an arpeggio of thumb and index finger (# #---) with the thumb
pressed first, the next character will be SHIFTed. The opposite direction
(first index, then thumb) will be a SHIFT-Lock, generating upper-case
characters until this combination is pressed again (or RET, ESC, or one of
the RESET combinations (see below)).

The same goes for PUNCTuation, DIGITs and CNTRL (control) characters.

The keys RETurn, ESCape, TABulator and BS (backspace) are needed relatively
often, so they have their own combination. Pressing middle and then index
finger quickly gives a backspace, while index and then middle gives a TAB.

And perhaps most often used is the "key repeat" function, by moving the
middle finger down to the 6th key. This special key is necessary, because
otherwise no auto-repeat is available. In previous versions I had
experimented with auto-repeating chords, but abandoned it. It was too easy to
trigger unwanted repeats. Instead, in the current chord logic a key
combination is considered ready when all keys of the chord are *released*.

Candidate input (e.g. Japanese or language-specific letters) can be toggled
on/off with CNTRL-SPACE. Typing text will then display matching candidates in
the top row of the screen. Either tap on one of them, or type CNTRL-SPACE
again to abort.

Initially, only a minimal set of candidates is installed. You can put a file
"PentiDictionary" into your system "Downloads" folder for an alternative
dictionary (for example by downloading the "Japanese Dictionary" from the
links below). The "Storage" permission in Settings/Apps/Penti must be enabled
- and Penti restarted - to use it.

Function keys are generated with the FUNCT prefix plus a number from the
DIGIT column. F10 is FUNCT-0, F11 is FUNCT-Z and F12 is FUNCT-M.

FUNCT-C generates COPY, FUNCT-P generates PASTE, FUNCT-H (help) shows a cheat
sheet, FUNCT-N (numeric) allows decimal Unicode input, FUNCT-Q (quit) hides
the virtual keyboard, and FUNCT-SPACE restarts (re-calibrates) it.

The characters in the ALTGR column can be (re-)defined with FUNCT-D: First
enter a letter 'a' - 'z', then the new definition. This can be any key,
possibly given via the candidates (CNTRL-SPACE) or as direct numeric Unicode
(FUNCT-N). Giving SPACE as the new definition clears this entry. The process
can be aborted any time with ESC.

If the "Downloads" folder contains a file "PentiAltKeyDefs", it is read and
written for ALTGR key definitions instead of the default internal one. It
should have exactly 32 lines, with one integer per line (may be zeroes
initially). The "Storage" permission in Settings/Apps/Penti must be enabled -
and Penti restarted - to use it.

FUNCT-W will PASTE an alternative paste buffer, which was filled when FUNCT-C
was pressed without selection.

As a side effect, the arpeggios RET and ESC reset all lock prefixes. This has
the same effect as the RESET chords.

Initially the letters "P E N T I" are displayed. This is an indication that
it expects you to touch the screen with all 5 fingers in a convenient
position. You can use both your right or your left hand. Take care to give
enough space to all fingers (so that, for example, the little finger is not
too close to the other fingers). After that, the five virtual keys are marked
as circles on the screen. The current input page is not resized and stays
fully visible.

As an additional goodie, swiping the screen vertically outside of any circle
allows you to adjust the display brightness. To enable it, the "Modify
settings" permission must be granted to the PentiKeyboard App, and "Adaptive
brightness" in the "Display & lights" settings must be switched off.

Swiping horizontally lets you adjust the audio volume.


Origin
------

The idea goes back to a hardware keyboard available in the 1980s called
"Octima". As the name implies, it used eight keys.

I reduced the number of keys to five, using the same basic letter assignment.
Instead of Octima's additional prefix keys, I introduced the concept of
arpeggios for prefixes.

Unfortunately, I don't have any original documentation about Octima, and also
can't find anything really useful in the net. So I'm not even sure about the
legal situation. I hope I don't do anything wrong here by publishing my work.
Please use it only for non-commercial purposes!

Octima existed for several languages. At least I have heard about English,
French and German. My implementation is the German version.


Mnemonics
---------

To make learning the key combinations easier, Octima came with a mnemonic
system. I don't remember well, but the english sentence was

  then lord saw big cup

i.e. just the index finger was 't', the middle finger 'h', the ring finger 'e',
and so on. Pressing index, middle and ring one after the other gives "the".


I can talk only about the German systematics here. The mnemo sentence is

  sein rad flog zum pkw

The index finger gives 's'. Pressing the index, middle, ring and little finger
one after the other gives "sein", just middle, ring and little gives "ein". See
the "Mnemo" table at the bottom of the "Penti" file. If you play a little with
the key combinations, you'll see what the idea is.

Some punctuation characters are also related to German mnemos. For example,
PUNCT-= (gleich), PUNCT-> (mehr), PUNCT-& (und) PUNCT-@ (Klammeraffe) and
PUNCT-? (Fragezeichen), while others like DIGIT-> (minus), PUNCT-/ (division)
or DIGIT-+ (plus) apply to English as well. Still others are simply iconic,
like PUNCT-! (i), or DIGIT-: vs. PUNCT-; (j). Perhaps it is best if you try
to remember them by your own ad-hoc rules ;)
```