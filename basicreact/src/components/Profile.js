import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
const menu = (
  <Menu
    items={[
      {
        label: <a href="http://localhost:3000/signup">SignUp</a>,
        key: '0',
      },
      {
        label: <a href="http://localhost:3000/login">Login</a>,
        key: '1',
      },
      {
        type: 'divider',
      }
    
    ]}
  />
);

const Profile = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      CLICK
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default Profile;