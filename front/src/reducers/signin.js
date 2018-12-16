import {
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
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
    default: 
      return initialState;
  }
}

export default signIn;