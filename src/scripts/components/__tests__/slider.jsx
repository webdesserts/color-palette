import { expect } from 'chai'
import React from 'react'
import * as util from '../../test-utils.js'
import Slider from '../slider.js'
import { Color } from '../../store/models.js';

describe('Slider', function () {
  describe('label', function () {
    it('should allow a dev to label the slider', function () {
      let slider = util.render(<Slider label="my slider"/>);
      let label = slider.refs.label;
      let text = label.textContent;
      expect(text).to.equal('my slider')
    })
  });

  describe('min', function () {
    it('should set the min value on the range input', function () {
      let slider = util.render(<Slider min={0} value={20}/>);
      let minimum = slider.refs.range.min;
      expect(minimum).to.equal('0')
    });
    it('should prevent a user from going below that value within the textbox', function () {
      let slider = util.render(<Slider min={0} value={20}/>);
      let textbox = slider.refs.textbox;

      util.backspaceUntilEmpty(textbox);
      util.typeOut(textbox, '-2');
      expect(textbox.value).to.equal('0');
      util.typeOut(textbox, '1');
      expect(textbox.value).to.equal('1');
      expect(slider.state.value).to.equal(1)
    })
  });

  describe('max', function () {
    it('should set the max value on the range input', function () {
      let slider = util.render(<Slider max={200} value={20}/>);
      let maximum = slider.refs.range.max;
      expect(maximum).to.equal('200')
    });
    it('should prevent a user from going above that value within the textbox', function () {
      let slider = util.render(<Slider max={200} value={20}/>);
      let textbox = slider.refs.textbox;

      util.backspaceUntilEmpty(textbox);
      util.typeOut(textbox, '280');
      expect(textbox.value).to.equal('200');
      expect(slider.state.value).to.equal(200)
    })
  })

  it('should allow a dev to set a value', function () {
    let slider = util.render(<Slider value={20}/>);
    let range = slider.refs.range;
    let textbox = slider.refs.textbox;
    expect(textbox.value).to.equal('20');
    expect(range.value).to.equal('20')
  })

  describe('onChange', function () {
    it('should be triggered by moving the range input', function () {
      let called = false;
      let slider = util.render(<Slider value={20} onChange={()=> called = true}/>);
      let range = slider.refs.range;
      range.value = '22';
      util.simulate.change(range);
      expect(called).to.equal(true)
    });
    it('should be triggered by typing in the text input', function () {
      let called = false;
      let slider = util.render(<Slider value={0} onChange={()=> called = true}/>);
      let textbox = slider.refs.textbox;
      util.typeOut(textbox, '1');
      util.simulate.change(textbox);
      expect(called).to.equal(true)
    });
    it('returns the current value represented on the slider', function () {
      let value;
      let slider = util.render(<Slider value={2} onChange={(v, l)=> value = v}/>);
      let textbox = slider.refs.textbox;
      util.backspaceUntilEmpty(textbox);
      util.typeOut(textbox, '51');
      expect(value).to.equal(51)
    });
    it('also returns the label for the slider', function () {
      let label;
      let slider = util.render(<Slider label="r" onChange={(v, l)=> label = l}/>);
      let textbox = slider.refs.textbox;
      util.typeOut(textbox, '1');
      expect(label).to.equal("r")
    })
  })
});
