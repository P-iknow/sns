import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from '../reducers/user';

function loginAPI(loginData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/login', loginData, {
    withCredentials: true,
  });
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOGIN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

function signUpAPI(signUpData) {
  // 서버에 요청을 보내는 부분
  return axios.post('/user/', signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: SIGNUP_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGNUP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGNUP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
