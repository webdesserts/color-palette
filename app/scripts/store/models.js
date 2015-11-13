import {Map, List} from 'immutable'

class IdGenerator {
  _lastId = 0;
  next = () => this._lastId += 1;
}

var paletteIds = new IdGenerator();
var colorIds = new IdGenerator();

function randomColor () {
  let randomValue = () => Math.round(Math.random() * 255);
  return new Color(randomValue(), randomValue(), randomValue())
}

let initialPalette = () => new List([randomColor(), randomColor(), randomColor(), randomColor()]);

function Palette (name, colors) {
  return new Map({
    id: paletteIds.next(),
    name,
    colors: colors ? new List(colors.map((c) => new Color(c.r, c.g, c.b))) : initialPalette()
  });
}

function Color (r=150, g=150, b=150, opts = {}) {
  return new Map({
    id: opts.id || colorIds.next(),
    origin: opts.origin || 'rgb',
    r,
    g,
    b
  })
}

export { Palette, Color }
