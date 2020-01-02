import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let fullDOMComponent;
const mockEventObj = {
  target: {
    value: 'new comment'
  }
};

beforeEach(() => {
  fullDOMComponent = mount(<CommentBox />);
});

afterEach(() => {
  fullDOMComponent.unmount();
});

it('has a text area and a button', () => {
  expect(fullDOMComponent.find('textarea').length).toEqual(1);
  expect(fullDOMComponent.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  fullDOMComponent
    .find('textarea')
    .simulate('change', mockEventObj)
    .update();

  expect(fullDOMComponent.find('textarea').prop('value')).toEqual(
    'new comment'
  );
});

it('when form is submitted, text area gets emptied', () => {
  fullDOMComponent
    .find('textarea')
    .simulate('change', mockEventObj)
    .update();

  fullDOMComponent
    .find('form')
    .simulate('submit')
    .update();

  expect(fullDOMComponent.find('textarea').prop('value')).toEqual('');
});
