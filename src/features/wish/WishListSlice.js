import { createSlice } from '@reduxjs/toolkit'

const wishListSlice = createSlice({
	name: 'wish',
	initialState: {
		showMiniWishList: false,
		wishList: [],
	},
	reducers: {
		showMiniWishList(state) {
			state.showMiniWishList = true
		},
		hideMiniWishList(state) {
			state.showMiniWishList = false
		},
		addToWishList(state, action) {
			const newItem = action.payload
			const index = state.wishList.findIndex((x) => x.id === newItem.id)
			if (index >= 0) {
				return
			} else {
				state.wishList.push(newItem)
			}
		},

		removeFromwishList(state, action) {
			const idNeedRemove = action.payload
			state.wishList = state.wishList.filter((x) => x.id !== idNeedRemove)
		},
	},
})

const { actions, reducer } = wishListSlice
export const { showMiniwishList, hideMiniwishList, addToWishList, removeFromWishList } = actions
export default reducer
