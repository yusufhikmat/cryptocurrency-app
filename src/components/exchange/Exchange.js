import React from 'react'
import { Avatar, Col, Row, Typography } from 'antd';
import millify from 'millify';
import { useGetCryptoExchangesQuery } from '../../api/cryptoExchange';

const Exchange = () => {
  const { data, isLoading} = useGetCryptoExchangesQuery();
  console.log(data)
  
  if(isLoading) return "loading"
  return (
    <div style={{marginTop:"1rem"}}>
    <Row style={{backgroundColor:"#001529",color:"white", padding:"0.7rem", marginBottom:"1rem"}}>
      <Col span={10}>Name</Col>
      <Col span={6}>24h Trade Volume</Col>
      <Col span={4}>Rank</Col>
      <Col span={4}>Year_est</Col>
    </Row>
    <Row>
      {data?.map((exchange)=>(
        <Col span={24}  style={{padding:"0.7rem 0", borderBottom:"0.1px solid gray"}}>
          <Row key={exchange.id}>
            <Col span={10}>
            <Avatar src={exchange.image} style={{width:"30px", height:"30px", borderRadius:"50%"}}/>
            <Typography.Text>{exchange.name}</Typography.Text>
            </Col>
            <Col span={6}>${millify(exchange.trade_volume_24h_btc)}</Col>
            <Col span={4}><Typography.Text>{exchange.trust_score_rank}</Typography.Text></Col>
            <Col span={4}><Typography.Text>{exchange.year_established}</Typography.Text></Col>
          </Row>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default Exchange