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
        <Title level={3} className='logo'>
          <Link to='/'>Juelz Cryptoverse</Link>
        </Title>
        {/* <Button className='menu-control-container'>

          </Button> */}
      </div>
      <Menu theme='dark'>
        <Item key='home' icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Item>
        <Item key='cryptocurrencies' icon={<FundOutlined />}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Item>
        <Item key='exchanges' icon={<MoneyCollectOutlined />}>
          <Link to='/exchanges'>Exchanges</Link>
        </Item>
        <Item key='news' icon={<BulbOutlined />}>
          <Link to='/news'>News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;
