import React from 'react'
import {Typography, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {HomeOutlined, FundOutlined, MoneyCollectOutlined,BulbOutlined  } from '@ant-design/icons';
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='nav-logo'>
        <Avatar size='large' src="https://w7.pngwing.com/pngs/322/622/png-transparent-usdc-cryptocurrency-logo-icon-thumbnail.png"/>
        <Typography.Title level={4}>
            <Link to ="/" className="logo-name">Cryptoverse</Link>
        </Typography.Title>
    </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchange">Exchange</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
        </div>
  )
}

export default Navbar