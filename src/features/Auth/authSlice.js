import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from 'api/userAPI'

export const register = createAsyncThunk('user/register', async (payload) => {
	//call api to register
	const { data } = await userAPI.register(payload)
	// save data to localstorage
	localStorage.setItem('jwt', data.jwt)
	return data.user
})
const authSlice = createSlice({
	name: 'user',
	initialState: {
		current: {},
		setting: {},
	},
	reducers: {},
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.current = action.payload
		},
	},
})
const { reducer } = authSlice
export default reducer
