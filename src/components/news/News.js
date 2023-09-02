import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../../api/cryptoNews'
import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment/moment';
import { useGetCryptosQuery } from '../../api/crytoApi';

import './News.css';
import { Option } from 'antd/es/mentions';

const News = ({ simplified}) => {
  const count = simplified ? 10 : 100;
  const [newsCat, setNewsCat] = useState("CryptoCurrency");
  const { data:cyptoNews, isLoading} = useGetCryptoNewsQuery({newsCat, count});
  const {data} = useGetCryptosQuery(100);
  console.log(data)
  const randomImage = "https://w7.pngwing.com/pngs/322/622/png-transparent-usdc-cryptocurrency-logo-icon-thumbnail.png"

  if(isLoading) return "...Loading";
  return (
    <>

    <Row gutter={[24, 24]} className='crypto-card-container'>
      {!simplified && (
        <Col span={24}>
          <Select
        showSearch
        className='select-news'
        placeholder='Select a Crypto'
        optionFilterProp="children"
        onChange={(value)=>setNewsCat(value)}
        filterOption={(input, Option)=>Option.children.toLowerCase().indexOf(input.toLowerCase()) > 0}>
       <Option value="CryptoCurrency">CryptoCurrency</Option>
       {data?.data?.coins?.map((coin)=><Option  value={coin.name}  key={coin.id}>{coin.name}</Option>)}
        </Select>
      </Col>
      )}
    
        {cyptoNews?.value?.map((news, index)=>{ 
        return( 
          <Col xs={24} sm={12} lg={6}  key={index}>
          
          <Card hoverable className='crypto-card'
          >
          <a href={news.url} target="_blank" rel="noreferrer" >
            <div className='news-heading'>
              <Typography.Title className='news-title' level={5}>{news.name}</Typography.Title>
              <img src={news?.image?.thumbnail?.contentUrl || randomImage} alt="" className='news-image'/>
            </div>
            <p className='news-description'>{news.description > 100 
              ? `${news.description.subString(0, 100)}...`: news.description}
              </p>
              <div className='news-details'>
                <span>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || randomImage} alt="" className='avater'/>
                  <span>{news.provider[0]?.name}</span>
                  </span>
                <span>{moment(news.datePublished).startOf("ss").fromNow()}</span>
              </div>
          </a>
          
          </Card>
          </Col>
        )})
        }

    </Row>
    </>
  )
}

export default News