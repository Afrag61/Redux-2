import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './ui-Slice.js'
import cartReducer from './cart-Slice.js'

const store = configureStore({
    reducer: {
        ui:uiReducer,
        cart: cartReducer
    }
})

export default store;