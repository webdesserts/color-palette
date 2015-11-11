import utils, { Simulate } from 'react-addons-test-utils'

export function render (component) {
  return utils.renderIntoDocument(component)
}

export function backspaceUntilEmpty (textbox) {
  while(textbox.value !== '') {
    textbox.value = textbox.value.slice(0, textbox.value.length - 1);
    Simulate.change(textbox)
  }
}

export function typeOut (textbox, string) {
  for (var i = 0; i < string.length; i++) {
    textbox.value += string[i];
    Simulate.change(textbox)
  }
}

export {utils as TextUtils}
export {Simulate as simulate}
