import { takeEvery } from '@redux-saga/core/effects'
const registerApi = function* () {
	yield true
}

export default function* rootSaga() {
	yield takeEvery(registerApi)
}
