import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/index'
import counter from '../features/counter/couterSlice'
import userInfor from 'features/Auth/authSlice'

const sagaMiddleware = createSagaMiddleware()
const middleware = [
	...getDefaultMiddleware({
		thunk: false,
	}),
	sagaMiddleware,
]

const store = configureStore({
	reducer: {
		counter,
		userInfor,
	},
	middleware,
})
sagaMiddleware.run(rootSaga)
export default store
