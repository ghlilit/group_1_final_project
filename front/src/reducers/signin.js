import {
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
  SIGNOUT
} from '../constants';

const initialState = {};

const signIn = (state=initialState, action) => {
  const { payload } = action;
  switch(action.type) {
    case SIGNIN_SUCCEED:
      return action.payload;
    case SIGNIN_FAILED:
      return {
        error: payload
      };
    case SIGNOUT:
      return {}
    default: 
      return initialState;
  }
}

export default signIn;