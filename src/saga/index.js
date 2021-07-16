import { call, takeEvery, put } from '@redux-saga/core/effects'
import authApi from 'api/userAPI'
import { register } from 'features/Auth/authSlice'

const registerApi = function* ({ payload }) {
	try {
		const params = payload
		const userData = {
			email: params.email,
			username: params.email,
			password: params.password,
			fullName: params.fullName,
		}
		const resp = yield call(authApi.register, userData)
		const { data, status } = resp
		if (status === 200) {
			yield localStorage.setItem('jwt', data.jwt)
			yield localStorage.setItem('user', JSON.stringify(data.user))
			yield put(register(data))
		}
	} catch (erorr) {
		console.log('error: ', erorr)
	}
}

export default function* rootSaga() {
	yield takeEvery('register', registerApi)
}
