import React from 'react';
import { Menu, Input } from 'antd';
import Link from 'next/link';

function AppLayout({ children }) {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}

export default AppLayout;
