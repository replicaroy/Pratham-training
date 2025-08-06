const initialState = {
  count: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return state.count > 0 ? {count :state.count -1} : {count: state.count}

    default:
      return state;
  }
};
