import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Input, Row, Col } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { LOAD_USER_REQUEST } from '../../reducers/user';

function AppLayout({ children }) {
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, []);
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
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
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

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
