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

let status;
let headers = {};

const signIn = (obj) => {
  return dispatch => {
   fetch(`http://localhost:4000/auth/sign_in`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(obj)
  })
  .then(res => {
      status = res.status;
      if(status === 200){
      headers = {
        'access-token': res.headers.get('access-token'),
          'client':res.headers.get('client'),
          'uid':res.headers.get('uid'),
          'expiry':res.headers.get('expiry')
      };
     }
      return res.json();
    })
    .then((res) => {
      console.log(res)
      if(res.errors) {
        console.log(res.errors[0])
        dispatch(failed(res.errors[0]))
      }
      else if(res.data){
        sessionStorage.setItem('user',JSON.stringify({
          'access-token': headers['access-token'],
          'client': headers['client'],
          'uid': headers['uid'],
          'expiry': headers['expiry'],
          'fname':res.data.fname,
          'lname':res.data.lname,
          'role':res.data.role,
          'id':res.data.id
        }))
        dispatch(succeed(res.data))
        if(res.data.role==='admin'){
          history.push('admin');
        }
        else{
        history.push('rooms');
        }
      }
      return res;
    })
    };
}

export default signIn;