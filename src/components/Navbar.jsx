import React from 'react';
import { Menu, Typography, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const { Title } = Typography;

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Title level={2} className='logo'>
          <Link to='/'>Juelz Cryptoverse</Link>
        </Title>
        {/* <Button className='menu-control-container'>

          </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
