import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'

const Home = () => {
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