import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
const initialState = {
  comments: ['Comment 1', 'Comment 2']
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
  initialState.comments.map(cmmt => {
    expect(wrapped.render().text()).toContain(cmmt);
  });
});
