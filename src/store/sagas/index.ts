import { all } from 'redux-saga/effects'
import signUpSaga from './singUpIn.saga'
import categorySaga from './category.saga'

export default function* rootSaga() {
	yield all([signUpSaga(), categorySaga()])
}
