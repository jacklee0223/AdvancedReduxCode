import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
  const shallowComponent = shallow(<App />);

  expect(shallowComponent.find(CommentBox).length).toEqual(1);
  expect(shallowComponent.find(CommentList).length).toEqual(1);
});
