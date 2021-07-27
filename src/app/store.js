import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/Auth/authSlice'
import cartReducer from 'features/Cart/CartSlice'

const store = configureStore({
	reducer: {
		userReducer,
		cart: cartReducer,
	},
})
export default store
