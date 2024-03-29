import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from '../../api/crytoApi';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './Crypto.css';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
   const { data :allCrypoList, isLoading }  = useGetCryptosQuery(count);
   const [crypto, setCrypto] = useState(allCrypoList?.data?.coins);
   const [search, setSearch] = useState("");
console.log(allCrypoList)
   useEffect(()=>{
    
    const filterData = allCrypoList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(search.toLowerCase()))
    setCrypto(filterData)
   },[allCrypoList,search])

 if(isLoading)return "Loading...";

   
  return (
    <>
    {!simplified && (
      <div className='search-input'>
    <input className="input-field" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search'/>
    </div>
    )}
   
    <Row gutter={[32, 32]} className='crypto-card-container'>
    
        {crypto?.map((item, index)=>{ 
        return( 
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={index}>
          <Link to={`/crypto/${item.uuid}`}>
          <Card 
            title={`${item.rank}. ${item.name}`}
            extra = {<img src={item.iconUrl} alt="" className='crypto-img'/>}
            hoverable
          >
          <p>Price: {millify(item.price)}</p>
          <p>Market Cap: {millify(item.marketCap)}</p>
          <p>Daily Change: {millify(item.change)}%</p>
          </Card>
          </Link>
          </Col>
        )})
        }

    </Row>
    </>
  )
}

export default Cryptocurrencies