const dummyUser = {
  nickname: 'piknow',
  Post: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  isLoggedIn: false, // 로그인 여부
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  LogInErrorReason: '', // 로그인 실패 사유
  signedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: '', // 회원가입 실패 사유
  me: null, // 내 정보
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null, // 남의 정보
};

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

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
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
        LogInErrorReason: '',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: dummyUser,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        LogInErrorReason: action.error,
        me: null,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
    }
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorReason: '',
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error,
      };
    }
    default:
      return state;
  }
};
