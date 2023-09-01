import { configureStore } from "@reduxjs/toolkit"
import { cryptoApi } from "../api/crytoApi"



export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath] :cryptoApi.reducer
    }
})
export default store