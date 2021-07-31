import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/Auth/authSlice'
import cartReducer from 'features/Cart/CartSlice'
import navSlice from 'components/Navbar/NavBarSlice'
const store = configureStore({
	reducer: {
		userReducer,
		cart: cartReducer,
		categoryId: navSlice,
	},
})
export default store
