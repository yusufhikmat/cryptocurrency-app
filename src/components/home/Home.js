import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../../api/crytoApi'
import millify from 'millify'
import Title from 'antd/es/typography/Title'
import { Link } from 'react-router-dom'
import './Home.css';
import Cryptocurrencies from '../cryptoCurrency/Cryptocurrencies'
import News from '../news/News'

const Home = () => {
const {data, isLoading } = useGetCryptosQuery();
const allData = data?.data?.stats;
console.log(data)
console.log(allData)

  return (
    <>
        <Typography.Title level={2} className='heading'>Global Cryptoverse</Typography.Title>
        {isLoading && <div>...Loading</div>}
        {/* {allData && ( */}
          <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={allData?.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(allData?.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(allData?.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(allData?.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(allData?.totalMarkets)}/></Col>
            <Col span={12}><Statistic title="Total Coins" value={millify(allData?.totalCoins)}/></Col>
        </Row>
        {/* )} */}
        
        <div className='home-sub-heading'>
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
            <Title level={3} className='show-more'>
              <Link to="/cryptocurrencies">Show more</Link>
            </Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-sub-heading'>
            <Title level={2} className='home-title'>Latest Crypo News</Title>
            <Title level={3} className='show-more'>
              <Link to="/news">Show more</Link>
            </Title>
        </div>
        <News simplified/>
    </>
  )
}

export default Home