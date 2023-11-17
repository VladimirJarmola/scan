const defaultState = {
    screenSize: 1440,
    mobileLimit: 800,
  };
  
  const ADD_SCREEN_SIZE = 'ADD_SCREEN_SIZE';
    
  export const screenReducer = (state = defaultState, action) => {
      switch (action.type) {
        case ADD_SCREEN_SIZE:
          return {...state, screenSize: action.payload}
        default: 
          return state
      }
  };
  
  export const addScreenSizeAction = (payload) => ({type: ADD_SCREEN_SIZE, payload});
  