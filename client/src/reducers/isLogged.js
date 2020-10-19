const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return !state;
    // case 'LOGGED_OUT':
    //   return (state = false);
    default:
      return state;
  }
};

export default loggedReducer;
