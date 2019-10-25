const dummyUser = {
  nickname: 'piknow',
  Post: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SIGNUP = 'SIGNUP';

export const loginAction = {
  type: LOGIN,
  data: {
    nickname: 'piknow',
  },
};

export const logoutAction = {
  type: LOGOUT,
};

export const signUpAction = data => {
  return {
    type: SIGNUP,
    data,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGNUP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default:
      return state;
  }
};
