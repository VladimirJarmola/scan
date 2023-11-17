const defaultState = {
    auth: false,
};

const ISAUTH = 'ISAUTH';
  
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ISAUTH':
        return {...state, auth: action.payload}
      default: 
        return state
    }
};

export const addAuthAction = (payload) => ({type: ISAUTH, payload});
