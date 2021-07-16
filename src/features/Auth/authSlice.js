import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'authSlice',
	initialState: [],
	reducers: {
		register(state, action) {
			return (state = action.payload)
		},
	},
})
const { actions, reducer } = authSlice
export const { register } = actions
export default reducer
