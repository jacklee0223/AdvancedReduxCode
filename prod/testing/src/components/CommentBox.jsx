import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  }

  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    const { auth } = this.props;

    if (!auth) {
      console.log('need to leave');
    }
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
    this.setState({
      comment: ''
    });
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

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
