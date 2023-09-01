import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../api/crytoApi'

const Home = () => {
// const {data, isFetching} = useGetCryptosQuery();
// console.log(data)
  
  return (
    <>
        <Typography.Title level={2} className='heading'>Global Cryptoverse</Typography.Title>
        <Row>
            <Col span={12}><Statistic title="heading" value="1"/></Col>
            <Col span={12}><Statistic title="heading" value="1"/></Col>
            <Col span={12}><Statistic title="heading" value="1"/></Col>
            <Col span={12}><Statistic title="heading" value="1"/></Col>
            <Col span={12}><Statistic title="heading" value="1"/></Col>
            <Col span={12}><Statistic title="heading" value="1"/></Col>
        </Row>
    </>
  )
}

export default Home