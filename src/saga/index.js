const testSaga = function* () {
   yield true
}

export default function* rootSaga() {
   yield testSaga
}
