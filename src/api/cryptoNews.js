import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsApiHeader ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '8ba164edf4msh27f9e38d1c60d0ep1e907djsn95a00158f369',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl ='https://bing-news-search1.p.rapidapi.com';

const createRequest=(url)=>({
    url,
    headers:cryptoNewsApiHeader
})
export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCartegory, count})=>createRequest(`/news/search?q=${newsCartegory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
