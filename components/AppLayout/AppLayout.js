import React from 'react';
import { Menu, Input, Row, Col } from 'antd';
import Link from 'next/link';
import LoginForm from './LoginForm';
import UserInfo from './UserInfo';

const dummy = {
  nickname: 'p-iknow',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

function AppLayout({ children }) {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserInfo dummy={dummy} /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="https://p-iknow.netlify.com/pages/about">
            <a target="_blank">Made by P-iknow</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default AppLayout;
