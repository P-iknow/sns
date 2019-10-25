const initialState = {
  isLoggedIn: false,
  user: {},
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const loginAction = {
  type: LOGIN,
  data: {
    nickname: 'piknow',
  },
};

const logoutAction = {
  type: LOGOUT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
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
