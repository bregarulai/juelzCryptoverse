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
const { Item } = Menu;

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
      <Menu theme='dark'>
        <Item icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Item>
        <Item icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Item>
        <Item icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Item>
        <Item icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;
