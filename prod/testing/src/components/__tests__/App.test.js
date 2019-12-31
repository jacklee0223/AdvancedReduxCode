import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
  const shallowComponent = shallow(<App />);

  expect(shallowComponent.find(CommentBox).length).toEqual(1);
});
