import { configureStore } from '@reduxjs/toolkit'
import userReducer from 'features/Auth/authSlice'
import cartReducer from 'features/Cart/CartSlice'
import CategoryList from 'features/Header/CategorySlice'
import wishListReducer from 'features/wish/WishListSlice'

const store = configureStore({
	reducer: {
		userReducer,
		cart: cartReducer,
		wishListItems: wishListReducer,
		categories: CategoryList,
	},
})
export default store
