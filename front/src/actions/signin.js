import {
  SIGNIN_SUCCEED,
  SIGNIN_FAILED,
  // SIGNOUT
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
      // console.log(res.data)
      if(res.status !== 200) {
        dispatch(failed('Something went wrong'));
      }
      else if (res.status === 200){
        sessionStorage.setItem('user',JSON.stringify({
          'access-token': res.headers.get('access-token'),
          'client':res.headers.get('client'),
          'uid':res.headers.get('uid'),
          'expiry':res.headers.get('expiry')
        }))
      }
      return res.json()
    })
    .then((data) => {
      console.log(data.errors)
      if(data.data) {
        dispatch(succeed(data.data))
        history.push('rooms');
      } else if(data.errors) {
        console.log(data.errors[0])
        dispatch(failed(data.errors[0]))
      }
    })
    };
}

// export const signOut = () => {
//   localStorage.removeItem('user');
//   history.push('/');
//   return { action: SIGNOUT }
// }

export default signIn;