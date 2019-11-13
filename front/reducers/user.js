const initialState = {
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingIn: false, // 로그인 시도중
  LogInErrorReason: "", // 로그인 실패 사유
  signedUp: false, // 회원가입 성공
  isSigningUp: false, // 회원가입 시도중
  signUpErrorReason: "", // 회원가입 실패 사유
  me: null, // 내 정보
  followingList: [], // 팔로잉 리스트
  followerList: [], // 팔로워 리스트
  userInfo: null // 남의 정보
};

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

export const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
export const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
export const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        LogInErrorReason: ""
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        me: action.data
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        LogInErrorReason: action.error,
        me: null
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        me: null
      };
    }
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorReason: ""
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorReason: action.error
      };
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_USER_SUCCESS: {
      if (action.me) {
        return {
          ...state,
          me: action.data
        };
      }
      return {
        ...state,
        userInfo: action.data
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};
