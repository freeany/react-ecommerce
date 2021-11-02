import { all } from 'redux-saga/effects'
import signUpSaga from './singUpIn.saga'

export default function* rootSaga() {
	yield all([signUpSaga()])
}
