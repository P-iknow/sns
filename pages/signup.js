import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
    console.table({
      id,
      nick,
      password,
      passwordCheck,
      term,
    });
  };
  const onChangeID = ({ target: { value } }) => {
    setId(value);
  };
  const onChangeNick = ({ target: { value } }) => {
    setNick(value);
  };
  const onChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const onChangePasswordCheck = ({ target: { value } }) => {
    setPasswordError(value !== password);
    setPasswordCheck(value);
  };
  const onChangeTerm = ({ target: { value } }) => {
    setTermError(false);
    setTerm(!value);
  };

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" required value={id} onChange={onChangeID} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              required
              value={nick}
              onChange={onChangeNick}
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
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>
              해당 사이트의 약관에 동의합니다.
            </Checkbox>
            {termError && (
              <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>
            )}
          </div>
          <div>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
