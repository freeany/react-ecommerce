import { takeEvery, put } from 'redux-saga/effects'
import axios, { AxiosError } from 'axios'
import {
	SIGNIN,
	SignInActionInterface,
	signInSuccessAction,
	signInFailureAction,
	SIGNUP,
	SignUpActionInterface,
	signUpFailureAction,
	signUpSuccessAction
} from '../actions/signUpIn.actions'
import { API } from '../../config'

interface axiosSignUpResponse {
	error: string
}

function* handleSignUpAction(action: SignUpActionInterface) {
	try {
		yield axios.post(`${API}/signup`, action.payload)
		yield put(signUpSuccessAction())
	} catch (err) {
		if (err instanceof Error) {
			const e = err as AxiosError<axiosSignUpResponse>
			console.log(e.response!.data.error, 'error')

			yield put(signUpFailureAction(e.response!.data.error))
		}
	}
}

function* handleSignInAction(action: SignInActionInterface) {
	try {
		const result: { data: {} } = yield axios.post(`${API}/signin`, action.payload)
		localStorage.setItem('jwt', JSON.stringify(result.data))
		yield put(signInSuccessAction())
	} catch (err) {
		if (err instanceof Error) {
			const e = err as AxiosError<axiosSignUpResponse>
			console.log(e.response!.data.error, 'error')
			yield put(signInFailureAction(e.response!.data.error))
		}
	}
}

function* signUpSaga() {
	yield takeEvery(SIGNUP, handleSignUpAction)
	yield takeEvery(SIGNIN, handleSignInAction)
}

export default signUpSaga
