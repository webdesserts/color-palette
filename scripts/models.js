import {Map, List} from 'immutable'

class IdGenerator {
  constructor() { this._lastId = 0; }
  next() {
    return this._lastId += 1;
  }
}

var paletteIds = new IdGenerator();
var colorIds = new IdGenerator();

let initialPalette = () => List(Color(), Color(), Color(), Color());

function Palette(name, colors = initialPalette()) {
  return new Map({
    id: paletteIds.next(),
    name: name,
    colors: new List(colors).map((c) => Color(c.r, c.g, c.b))
  })
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
