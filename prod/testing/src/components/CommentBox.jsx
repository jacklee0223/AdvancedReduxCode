import React, { Component } from 'react';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      comment: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // TODO - Call an action creator
    // And save the comment
    this.setState({
      comment: ''
    });
  };

  render() {
    const { comment } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}
