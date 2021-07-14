import { put, takeEvery } from '@redux-saga/core/effects'
import { decrease, increase } from '../features/counter/couterSlice'
const testSaga = function* () {
	while (true) {
		yield put({ increase })
		yield put({ decrease })
	}
}

export default function* rootSaga() {
	yield takeEvery('increase/decrease', testSaga)
}
