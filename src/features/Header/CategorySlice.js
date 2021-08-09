import { createSlice } from '@reduxjs/toolkit'

const CategoryList = createSlice({
	name: 'CategoryList',
	initialState: {
		categoryList: [],
	},
	reducers: {
		addCategoryList(state, action) {
			state.categoryList = action.payload
		},
	},
})

const { actions, reducer } = CategoryList
export const { addCategoryList } = actions
export default reducer
