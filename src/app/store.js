import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/index'
import counter from '../features/counter/couterSlice'

const sagaMiddleware = createSagaMiddleware()
const middleware = [
	...getDefaultMiddleware({
		thunk: false,
	}),
	sagaMiddleware,
]

export const store = configureStore({
	reducer: {
		counter,
	},
	middleware,
})
sagaMiddleware.run(rootSaga)
