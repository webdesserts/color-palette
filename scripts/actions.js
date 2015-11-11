import * as types from './types.js'

export function createPalette (name) {
  console.log('CREATE_PALETTE');
  return {
    type: types.CREATE_PALETTE,
    name
  }
}

export function renamePalette (id, name) {
  return {
    type: types.RENAME_PALETTE,
    id,
    name
  }
}

export function removePalette (id) {
  return {
    type: types.REMOVE_PALETTE,
    id
  }
}

export function createColor (palette_id) {
  console.log('CREATE_COLOR');
  return {
    type: types.CREATE_COLOR,
    palette_id
  }
}

export function removeColor (palette_id, color_id) {
  return {
    type: types.REMOVE_COLOR,
    palette_id,
    index
  }
}

export function updateColor (palette_id, color) {
  console.log('UPDATE_COLOR');
  return {
    type: types.UPDATE_COLOR,
    palette_id,
    color
  }
}
