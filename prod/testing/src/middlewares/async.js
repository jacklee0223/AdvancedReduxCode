export default ({ dispatch }) => next => action => {
  // Check to see if the action
  // has a promise on its payload property
  // if it does, then wait for it to resolve
  // if it doesnt then send the action to the
  // next middleware
  const { payload } = action;
  if (!payload || !payload.then) {
    return next(action);
  }

  // We want to wait for the promise to resolve
  // (get its data) and then create a new action
  // with that data and dispatch it
  payload.then(response => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
