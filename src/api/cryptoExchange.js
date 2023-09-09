import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoExchangeApiHeader ={
    'X-RapidAPI-Key': '8ba164edf4msh27f9e38d1c60d0ep1e907djsn95a00158f369',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl ='https://coingecko.p.rapidapi.com/';

const createRequest=(url)=>({
    url,
    headers:cryptoExchangeApiHeader
})
export const cryptoExchangeApi = createApi({
    reducerPath:"cryptoExchangeApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoExchanges:builder.query({
            query:()=>createRequest('/exchanges')
        })
    })
})

export const {useGetCryptoExchangesQuery} = cryptoExchangeApi;
