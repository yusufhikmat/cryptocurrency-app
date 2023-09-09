import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoApiHeader ={
    'X-RapidAPI-Key': '8ba164edf4msh27f9e38d1c60d0ep1e907djsn95a00158f369',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl ='https://coinranking1.p.rapidapi.com';

const createRequest=(url)=>({
    url,
    headers:cryptoApiHeader
})
export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
        }),
    })
})

export const {useGetCryptosQuery,useGetCryptoDetailsQuery, useGetExchangesQuery} = cryptoApi;
