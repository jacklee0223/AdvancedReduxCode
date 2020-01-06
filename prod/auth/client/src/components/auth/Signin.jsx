import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import authReducer from 'reducers/auth';
import * as actions from 'actions';
import { statement } from '@babel/template';

class Signin extends Component {
  onSubmit = formProps => {
    const { signin, history } = this.props;
    signin(formProps, () => {
      history.push('/feature');
    });
  };

  render() {
    // handleSubmit comes from reduxForm
    const { handleSubmit, errorMessage } = this.props;

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
        <div>{errorMessage}</div>
        <button>Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'singin' })
)(Signin);
