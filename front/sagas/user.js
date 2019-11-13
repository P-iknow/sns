import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE
} from "../reducers/user";

function loginAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios.post("/user/login", loginData, {
    withCredentials: true
  });
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: LOGIN_SUCCESS,
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOGIN_FAILURE
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

function logoutAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}

function* logout(action) {
  try {
    yield call(logoutAPI, action.data);
    yield put({
      type: LOGOUT_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOGOUT_FAILURE,
      error: e
    });
  }
}

function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios.post("/user/", signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: SIGNUP_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGNUP_FAILURE,
      error: e
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
}

function loadUserAPI(userId) {
  // 서버에 요청을 보내는 부분
  const requestUrl = userId ? `/user/${userId}` : "/user/";
  return axios.get(requestUrl, {
    withCredentials: true
  });
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLogout),
    fork(watchLoadUser)
  ]);
}
