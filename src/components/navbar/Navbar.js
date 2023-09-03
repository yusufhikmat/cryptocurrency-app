import React, {useState, useEffect} from 'react'
import {Typography, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {HomeOutlined, FundOutlined,CloseOutlined, MoneyCollectOutlined,BulbOutlined, MenuOutlined  } from '@ant-design/icons';
const Navbar = () => {
    const [screenSize, setScreenSize] = useState(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);

    useEffect(()=>{
        const handleResize = () =>setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();

        return ()=>window.removeEventListener('resize', handleResize);
    },[]);

    
    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible); // Toggle navbar visibility on button click
    };
    // Function to close the navbar when a navlink is clicked
    const closeNavbar = () => {
        if (screenSize < 768) {
            setIsNavbarVisible(false);
        }
    };
  return (
    <>
    <button className='toggle-btn' onClick={toggleNavbar}>
        {isNavbarVisible ? <CloseOutlined /> : <MenuOutlined /> }
            
    </button>
    <div className={`navbar ${isNavbarVisible ? 'visible' : ''}`}>
    <div className='nav-logo'>
        <Avatar size='large' src="https://w7.pngwing.com/pngs/322/622/png-transparent-usdc-cryptocurrency-logo-icon-thumbnail.png"/>
        <Typography.Title level={3}>
            <Link to ="/" className="logo-name">Cryptoverse</Link>
        </Typography.Title>
        
    </div>
        <Menu theme='dark' className='nav-menu'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/" className='nav-link'onClick={closeNavbar} >Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies" className='nav-link' onClick={closeNavbar}>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchange" className='nav-link' onClick={closeNavbar}>Exchange</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news" className='nav-link' onClick={closeNavbar}>News</Link>
            </Menu.Item>
        </Menu>
        </div>
        </>
  )
}

export default Navbar