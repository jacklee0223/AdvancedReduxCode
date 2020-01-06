import { AUTH_USER } from 'actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_USER:
      return { ...state, authenticated: payload };
    default:
      return state;
  }
};
