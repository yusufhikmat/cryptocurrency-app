import React from 'react'
import {Typography, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {HomeOutlined, FundOutlined, MoneyCollectOutlined,BulbOutlined  } from '@ant-design/icons';
const Navbar = () => {
  return (
    <div className='navbar-container'>
    <div>
        <Avatar size='large' src="data:image/png;base64,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"/>
        <Typography.Title level={4}>
            <Link to ="/" className="logo">Cryptoverse</Link>
        </Typography.Title>
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

    </div>
  )
}

export default Navbar