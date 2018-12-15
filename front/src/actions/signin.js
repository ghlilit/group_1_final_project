import {
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
  SIGNOUT
} from '../constants';
import history from '../browserHist';

const succeed = (data) => ({
  type: SIGNIN_SUCCEED,
  payload: data
});

const failed = (error) => ({
  type: SIGNIN_FAILED,
  payload: error
});

const signIn = (obj) => {
  return dispatch => {
   fetch(`http://localhost:4000/auth/sign_in`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(obj)
  })
    .then((res) => {
      if(res.status !== 200) {
        dispatch(failed('Something went wrong'));
      }
      return res.json()
    })
    .then((data) => {
      if(data.data) {
        dispatch(succeed(data.data))
        history.push('rooms');
      } else if(data.errors) {
        dispatch(failed(data.errors[0]))
      }
    })
    };
}

export const signOut = () => {
  localStorage.removeItem('user');
  history.push('/');
  return { action: SIGNOUT }
}

export default signIn;