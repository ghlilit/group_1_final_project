import {
  SIGNUP_SUCCEED,
  SIGNUP_FAILED
} from '../constants';

const succeed = (data) => ({
  type: SIGNUP_SUCCEED,
  payload: data
});

const failed = () => ({
  type: SIGNUP_FAILED
});

const signUp = (obj) => {
  return dispatch => {
   fetch(`http://localhost:4000/auth`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(obj)
  })
    .then((res) => res.json())
    .then((data) => data.status ? succeed(data.data) : failed())
  };
}

export default signUp;