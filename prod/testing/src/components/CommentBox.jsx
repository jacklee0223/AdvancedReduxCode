import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
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
    const { saveComment } = this.props;
    e.preventDefault();

    saveComment(this.state.comment);
    this.setState(
      {
        comment: ''
      },
      () => this.props.history.push('/')
    );
  };

  render() {
    const { comment } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));
