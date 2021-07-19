import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/Auth/authSlice'

const store = configureStore({
	reducer: {
		userReducer,
	},
})
export default store
