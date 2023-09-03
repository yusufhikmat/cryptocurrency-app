import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from '../../api/crytoApi';
import millify from 'millify';
import { Col,Row,Select, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { CheckOutlined, FundFilled, FundOutlined, MoneyCollectFilled, NumberOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import './CryptoDetails.css';

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timer, setTimer] = useState('7days')
  console.log(coinId)
  const {data, isLoading} = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(data);
  if(isLoading)return "...loading";
  const time = ['3h', '24h', '7d'];
  const stats = [
    {title: "price to USD", value: `$ ${cryptoDetails.price && millify(cryptoDetails.price) }`,icon: <NumberOutlined/>},
    {title: "Rank", value: cryptoDetails.rank, icon: <NumberOutlined/> },
    {title: "hasContent", value: `${cryptoDetails.hasContent}` ,icon: <NumberOutlined/>},
    {title: "Market Cap", value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap) }`, icon: <NumberOutlined/>},
    {title: "All-time-high", value: `$ ${cryptoDetails.allTimeHigh && millify(cryptoDetails.price) }`, icon: <NumberOutlined/>}
  ];

  const Gstats = [
    {title: "numberOfMarkets", value: cryptoDetails.numberOfMarkets,  icon: <FundFilled/> },
    {title: "numberOfExchanges", value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectFilled/> },
    {title: "Approved Supply", value: `${cryptoDetails.supply.confirmed}` ,icon: <CheckOutlined/>},
    {title: "Total Supply", value: `$ ${millify(cryptoDetails.supply.total) }`, icon: <NumberOutlined/>},
    {title: "Circulating Supply", value: `$ ${millify(cryptoDetails.supply.circulating) }`, icon: <NumberOutlined/>}
  ]
  return (
    <Col className="">
    <Col>
      <Typography.Title level={2}>
        {cryptoDetails?.name} ({cryptoDetails.slug}) prices
      </Typography.Title>
      <p>{cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply</p>
    </Col>
    <Select 
      defaultValue = "7d"
      className="select-time"
      placeholder = "Select time period"
      onChange = {(value)=>setTimer(value)}
      >
      {time.map((date)=><Option key={date}>{date}</Option>)}
    </Select>
    <Col className='stats-container'>
    <Col className='coin-value-statistics'>
      <Col className='coin-value-statistics-heading'>
      <Typography.Title level={3}>
        {cryptoDetails?.name} Value Statistics
      </Typography.Title>
      <p>An overview showing the stats of {cryptoDetails?.name}</p>
      </Col>
      {stats.map(({icon, title, value})=>(
        <Col className='coin-values'>
        <Col>
          <Typography.Text>{icon}</Typography.Text>
          <Typography.Text>{title}</Typography.Text>
        </Col>
        <b>{value}</b>
        </Col>
      ))}
    </Col>

    <Col className='coin-value-statistics'>
      <Col className='coin-value-statistics-heading'>
      <Typography.Title level={3}>
        Other Statistics
      </Typography.Title>
      <p>An overview showing the stats of all cryptocurrencies</p>
      </Col>
      {Gstats.map(({icon, title, value})=>(
        <Col className='coin-values'>
        <Col>
          <Typography.Text>{icon}</Typography.Text>
          <Typography.Text>{title}</Typography.Text>
        </Col>
        <b>{value}</b>
        </Col>
      ))}
    </Col>
    </Col>
    <Col className='coin-desc-link'>
    <Row className='coin-desc'>
        <Typography.Title level={3} className='coin-details-heading'>
            What is {cryptoDetails.name} :
           <p className='coin-desc-paragraph'>{HTMLReactParser(cryptoDetails.description)}</p>
        </Typography.Title>
    </Row>
    <Col className='coin-links'>
    <Typography.Title level={3}>
      {cryptoDetails.name} Links
    </Typography.Title>
    {cryptoDetails.links.map((link)=>(
      <Row key={link.name} className='link-name'>
        <Typography.Title level={5}>
          {link.type}
        </Typography.Title>
        <a href={link.url} target='_blank' rel='noreferrer'>
          {link.name}
        </a>
      </Row>
    ))}
      </Col>
    </Col>
    </Col>
  )
}

export default CryptoDetails