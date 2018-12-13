import {
  SIGNIN_SUCCEED,
  SIGNIN_FAILED
} from '../constants';

const initialState = {};

const signIn = (state=initialState, action) => {
  switch(action.type) {
    case SIGNIN_SUCCEED:
      return action.payload;
    case SIGNIN_FAILED:
      return initialState;
    default: 
      return initialState;
  }
}

export default signIn;