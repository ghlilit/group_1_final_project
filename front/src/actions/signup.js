import {
  SIGNUP_SUCCEED,
  SIGNUP_FAILED
} from '../constants';
import history from '../browserHist';

const succeed = (data) => ({
  type: SIGNUP_SUCCEED,
  payload: data
});

const failed = (error) => ({
  type: SIGNUP_FAILED,
  payload: error
}
);

const signUp = (obj) => {
  return dispatch => {
   fetch(`http://localhost:4000/auth`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(obj)
  })
    .then(
      (res) => {
        if(res.status!==200){
          dispatch(failed("Something went wrong"))
        }
        return res.json();
      }
      )
    .then((data) => {
      if(data.errors){
        console.log(data.errors)
        dispatch(failed(data.errors[0]))
      }
      else if(data.data){
        dispatch(succeed(data.data))
        history.push('signin')
      }
    })
  };
}

export default signUp;