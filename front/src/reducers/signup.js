import {
    SIGNUP_SUCCEED,
    SIGNUP_FAILED,
  } from '../constants';
  
  const initialState = {};
  
  const signUp = (state=initialState, action) => {
    const { payload } = action;
    switch(action.type) {
      case SIGNUP_SUCCEED:
        return action.payload;
      case SIGNUP_FAILED:
        return {
          error: payload
        };
      default: 
        return initialState;
    }
  }
  
  export default signUp;