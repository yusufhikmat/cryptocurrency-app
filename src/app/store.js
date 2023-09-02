import { configureStore } from "@reduxjs/toolkit"
import { cryptoApi } from "../api/crytoApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { cryptoNewsApi } from "../api/cryptoNews"



export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath] :cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] :cryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(cryptoApi.middleware)
    .concat(cryptoNewsApi.middleware)
})

setupListeners(store.dispatch)
export default store