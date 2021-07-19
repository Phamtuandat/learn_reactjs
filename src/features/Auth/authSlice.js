import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from 'api/userAPI'
import StorageKey from 'Contant/Storage_key'

export const register = createAsyncThunk('user/register', async (payload) => {
	//call api to register
	const { data } = await userAPI.register(payload)
	// save data to localstorage
	localStorage.setItem(StorageKey.TOKEN, data.jwt)
	localStorage.setItem(StorageKey.USER, JSON.stringify(data.user))
	return data.user
})
export const login = createAsyncThunk('user/login', async (payload) => {
	//call api to register
	const { data } = await userAPI.login(payload)
	// save data to localstorage
	localStorage.setItem(StorageKey.TOKEN, data.jwt)
	localStorage.setItem(StorageKey.USER, JSON.stringify(data.user))
	return data.user
})
const authSlice = createSlice({
	name: 'user',
	initialState: {
		current: JSON.parse(localStorage.getItem(StorageKey.user)) || {},
		setting: {},
	},
	reducers: {
		logout(state) {
			localStorage.removeItem(StorageKey.TOKEN)
			localStorage.removeItem(StorageKey.USER)
			return (state = {})
		},
	},
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			state.current = action.payload
		},
		[login.fulfilled]: (state, action) => {
			state.current = action.payload
		},
	},
})

const { reducer, actions } = authSlice
export const { logout } = actions
export default reducer
