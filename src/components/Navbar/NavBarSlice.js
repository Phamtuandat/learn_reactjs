import { createSlice } from '@reduxjs/toolkit'

const NavBarSlice = createSlice({
	name: 'navBarSlice',
	initialState: {
		categoryId: null,
	},
	reducers: {
		addFilterByCategory(state, action) {
			state.categoryId = action.payload
		},
	},
})

const { actions, reducer } = NavBarSlice

export const { addFilterByCategory } = actions

export default reducer
