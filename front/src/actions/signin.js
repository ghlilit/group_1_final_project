import {
  SIGNIN_SUCCEED,
  SIGNIN_FAILED
} from '../constants';

const succeed = (data) => ({
  type: SIGNIN_SUCCEED,
  payload: data
});

const failed = () => ({
  type: SIGNIN_FAILED
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
    .then((res) => res.json())
    .then((data) => data.status ? dispatch(succeed(data.data)) : dispatch(failed()))
    };
}

export default signIn;