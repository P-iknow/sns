import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Checkbox, Button } from 'antd';
import Router from 'next/router';
import { useInput } from '../hooks';
import { SIGNUP_REQUEST } from '../reducers/user';

const Signup = () => {
  const [id, onChangeID] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);
  // 자바스크립트 객체는 undefined가 될 수 있으닌 가드를 해주자
  // me 가 아닌 me.id를 dependency에 추가하는 이유는 객체는 비교가 어렵기 때문이다.(shallow copy로 인해)

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      if (!term) {
        return setTermError(true);
      }
      dispatch({
        type: SIGNUP_REQUEST,
        data: { userId: id, password, nickname },
      });
    },
    [id, password, passwordCheck, term, nickname]
  );

  const onChangePasswordCheck = useCallback(
    ({ target: { value } }) => {
      setPasswordError(value !== password);
      setPasswordCheck(value);
    },
    [password]
  );
  const onChangeTerm = useCallback(({ target: { checked } }) => {
    setTermError(false);
    setTerm(checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" required value={id} onChange={onChangeID} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input
            name="user-nickname"
            required
            value={nickname}
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            required
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            required
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            해당 사이트의 약관에 동의합니다.
          </Checkbox>
          {termError && (
            <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            가입하기
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Signup;
