import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/index'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

export const store = configureStore({
   reducer: {},
   middleware,
})
sagaMiddleware.run(rootSaga)
