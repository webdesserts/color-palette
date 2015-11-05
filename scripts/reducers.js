import * as types from './types.js'
import { Palette, Color } from './models.js'
import Immutable from 'immutable'

const initial = Immutable.fromJS({
  palettes: [
    Palette('Pretty Colors', [
      {r:100, g:120, b:200},
      {r:220, g:70,  b:120},
      {r:30,  g:190, b:170},
      {r:220, g:200, b:20}
    ]),
    Palette('Oh The Colors', [
      {r:200, g:220, b:100},
      {r:120, g:170,  b:220},
      {r:130,  g:230, b:130},
      {r:20, g:100, b:120}
    ]),
    Palette('Ugly Colors', [
      {r:30, g:20, b:70},
      {r:150, g:70,  b:120},
      {r:70,  g:90, b:30},
      {r:120, g:100, b:20}
    ])
  ]
});

function findPaletteIndex(state, id) {
  return state.get('palettes').findIndex(p => p.get('id') == id);
}

function findColorIndex(palette, id) {
  return palette.get('colors').findIndex(c => c.get('id') == id);
}

export function PaletteReducers(state = initial, action) {
  switch (action.type) {

    case types.CREATE_PALETTE:
    {
      return state.updateIn(['palettes'], p => p.push(Palette(action.name)));
    }

    case types.RENAME_PALETTE:
    {
      let i = findPaletteIndex(state, action.id);
      return state.setIn(['palettes', i, 'name'], action.name);
    }

    case types.REMOVE_PALETTE:
    {
      let i = findPaletteIndex(state, action.id);
      return state.removeIn(['palettes', i]);
    }


    case types.CREATE_COLOR:
    {
      let i = findPaletteIndex(state, action.palette_id);
      return state.updateIn(['palettes', i, 'colors'], c => c.push(Color()));
    }

    case types.UPDATE_COLOR:
    {
      let palette_index = findPaletteIndex(state, action.palette_id);
      let color_index = findColorIndex(state.get('palettes').get(palette_index), action.color.get('id'));
      return state.updateIn(['palettes', palette_index, 'colors', color_index], color => action.color);
    }

    case types.REMOVE_COLOR:
    {
      let i = findPaletteIndex(state, action.palette_id);
      return state.deleteIn(['palettes', i, 'colors', action.index]);
    }

    default:
      return state;
  }
}