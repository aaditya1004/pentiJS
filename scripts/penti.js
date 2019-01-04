'use strict'

function Penti () {
  let chord = '---- -'
  this.release = null // timer

  this.start = function () {
    this.preview = document.getElementById('preview')
    this.hand = document.getElementById('hand')
    this.listen()
  }

  this.listen = function (host) {
    console.log('listening..')
    document.body.addEventListener('keydown', (e) => { this.keydown(e); e.preventDefault() })
    document.body.addEventListener('keyup', (e) => { this.keyup(e); e.preventDefault() })
  }

  this.clear = function () {
    chord = '---- -'
  }

  this.keydown = function (e) {
    const index = key(e.key)
    chord = chord.substr(0, index) + '#' + chord.substr(index + 1)

    if (this.release !== null) { return }

    this.release = setTimeout(() => {
      this.input(specs(chord))
      this.release = null
      this.clear()
    }, 50)
  }

  this.keyup = function (e) {
    if (e.key === 'Backspace') { this.erase(); e.preventDefault() }
  }

  this.input = function (val) {
    if (!val || !this.preview) { return }
    this.hand.textContent = chord
    this.preview.textContent = this.preview.textContent + val
  }

  this.erase = function () {
    this.preview.textContent = ''
  }

  this.toString = function () {
    return `${chord}`
  }

  function specs (chord, leftHanded = true) {
    if (chord === '---- #') { return ' ' }
    if (chord === '-#-- #') { return 'A' }
    if (chord === '-##- #') { return 'B' }
    if (chord === '-#-# -') { return 'C' }
    if (chord === '#--- #') { return 'D' }
    if (chord === '--#- -') { return 'E' }
    if (chord === '---# #') { return 'F' }
    if (chord === '##-- -') { return 'G' }
    if (chord === '#--# #') { return 'H' }
    if (chord === '-#-- -') { return 'I' }
    if (chord === '#--# -') { return 'J' }
    if (chord === '#### -') { return 'K' }
    if (chord === '--## -') { return 'L' }
    if (chord === '###- -') { return 'M' }
    if (chord === '#--- -') { return 'N' }
    if (chord === '-##- -') { return 'O' }
    if (chord === '-### #') { return 'P' }
    if (chord === '-#-# #') { return 'Q' }
    if (chord === '--#- #') { return 'R' }
    if (chord === '---# -') { return 'S' }
    if (chord === '###- #') { return 'T' }
    if (chord === '-### -') { return 'U' }
    if (chord === '##-# -') { return 'V' }
    if (chord === '#### #') { return 'W' }
    if (chord === '##-# #') { return 'X' }
    if (chord === '##-- #') { return 'Y' }
    if (chord === '--## #') { return 'Z' }
  }

  function key (k) {
    if (k === '1') { return 0 }
    if (k === '2') { return 1 }
    if (k === '3') { return 2 }
    if (k === '4') { return 3 }
    return 5
  }
}
