import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let shallowComponent;

beforeEach(() => {
  shallowComponent = shallow(<App />);
});

afterEach(() => {
  shallowComponent.unmount();
});

it('shows a comment box', () => {
  expect(shallowComponent.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(shallowComponent.find(CommentList).length).toEqual(1);
});
