import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  render() {
    const { comment } = this.state;

    return (
      <form>
        <h4>Add a Comment</h4>
        <textarea value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}
