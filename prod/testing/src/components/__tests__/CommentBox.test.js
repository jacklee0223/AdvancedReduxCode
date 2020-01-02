import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let fullDOMComponent;

beforeEach(() => {
  fullDOMComponent = mount(<CommentBox />);
});

it('has a text area and a button', () => {
  expect(fullDOMComponent.find('textarea').length).toEqual(1);
  expect(fullDOMComponent.find('button').length).toEqual(1);
});
