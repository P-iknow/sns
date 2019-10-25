const dummyUser = {
  nickname: 'piknow',
  Post: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  isLoggedIn: false,
  user: null,
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const loginAction = {
  type: LOGIN,
  data: {
    nickname: 'piknow',
  },
};

export const logoutAction = {
  type: LOGOUT,
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
    default:
      return state;
  }
};
