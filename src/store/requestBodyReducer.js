const defaultState = {
  requestBody: {},
};

const ADD_REQUEST_BODY = 'ADD_REQUEST_BODY';
  
export const requestBodyReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_REQUEST_BODY:
        return {...state, requestBody: action.payload}
      default: 
        return state
    }
};

export const addRequestBodyAction = (payload) => ({type: ADD_REQUEST_BODY, payload});
