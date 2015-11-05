import {Map, List} from 'immutable'

class IdGenerator {
  constructor() { this._lastId = 0; }
  next() {
    return this._lastId += 1;
  }
}

var paletteIds = new IdGenerator();
var colorIds = new IdGenerator();

function randomColor() {
  let randomValue = () => Math.round(Math.random()*255);
  return Color(randomValue(), randomValue(), randomValue())
}

let initialPalette = () => List([randomColor(), randomColor(), randomColor(), randomColor()]);

function Palette(name, colors) {
  return new Map({
    id: paletteIds.next(),
    name: name,
    colors: colors ? List(colors.map((c) => Color(c.r, c.g, c.b))) : initialPalette()
  });
}

function Color(r=150, g=150, b=150, opts = {}) {
  return new Map({
    id: opts.id || colorIds.next(),
    origin : opts.origin || "rgb",
    r : r,
    g : g,
    b : b
  })
}

export { Palette, Color }
