import React from 'react'
import { useGetExchangesQuery } from '../../api/crytoApi'
import { Avatar, Col, Collapse, Row, Typography } from 'antd';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';

const Exchange = () => {
  const { data, isLoading} = useGetExchangesQuery();
  const exchangeList =data?.data?.exchanges;
  console.log(data)
  
  if(isLoading) return "loading"
  return (
    <>
    <Row>
      <Col span={6}>Exchanges</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={6}>Markets</Col>
      <Col span={6}>Change</Col>
    </Row>
    <Row>
      {exchangeList?.map((exchange)=>(
        <Col span={24}>
        <Collapse>
        <Collapse.Panel 
        key={exchange.id}
        showArrow={false}
        header = {(
          <Row key={exchange.id}>
            <Col span={6}>
            <Typography.Text>{exchange.rank}</Typography.Text>
            <Avatar src={exchange.iconUrl}/>
            <Typography.Text>{exchange.name}</Typography.Text>
            </Col>
            <Col span={6}>${millify(exchange.volume)}</Col>
            <Col span={6}>${millify(exchange.numberOfMarkets)}</Col>
            <Col span={6}>${millify(exchange.marketShare)}%</Col>
          </Row>
        )}
        >
        {HTMLReactParser(exchange.description || '')}
        </Collapse.Panel>
        </Collapse>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Exchange