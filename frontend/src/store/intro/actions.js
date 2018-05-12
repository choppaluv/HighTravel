export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const USER_INFO_RECEIVED = 'INTRO_RECEIVED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const IntroReceived = ({uname, token, userId}) => {
  return {
    type: INTRO_RECEIVED,
    username: uname,
    token: token,
    userId: userId
  }
};

export const loginFailed = (err) => {
    console.log('action')
    console.log(err)
  return {
    type: LOGIN_FAILED,
    errorMessage: err
  }
};

export const loginRequest = (username, password) => {
  return {
    type: LOGIN_REQUEST,
    username,
    password
  }
};
