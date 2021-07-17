import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/couterSlice'
import userReducer from 'features/Auth/authSlice'

const store = configureStore({
	reducer: {
		counter,
		userReducer,
	},
})
export default store
