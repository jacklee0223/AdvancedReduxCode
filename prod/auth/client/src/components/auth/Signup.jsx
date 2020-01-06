import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import authReducer from 'reducers/auth';
import * as actions from 'actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps);
  };

  render() {
    // handleSubmit comes from reduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Sign Up</button>
      </form>
    );
  }
}

// const mapStateToProps = {
//   auth: authReducer
// };

export default compose(
  connect(null, actions),
  reduxForm({ form: 'singup' })
)(Signup);
