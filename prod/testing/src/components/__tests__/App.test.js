import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

const shallowComponent = shallow(<App />);

it('shows a comment box', () => {
  expect(shallowComponent.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(shallowComponent.find(CommentList).length).toEqual(1);
});
