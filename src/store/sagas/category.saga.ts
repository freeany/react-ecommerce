import { takeEvery, put } from 'redux-saga/effects'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { GET_CATEGORY, getCategorySuccessAction } from '../actions/category.action'
import { Category } from '../models/category'
import { API } from '../../config'

interface GetCategoryError {
	error: string
}
function* handleGetSaga() {
	try {
		const result: AxiosResponse<Category[]> = yield axios.get(`${API}/categories`)
		put(getCategorySuccessAction(result.data))
	} catch (err) {
		if (err instanceof Error) {
			const e = err as AxiosError<GetCategoryError>
			console.log(e.response!.data.error, 'error')
		}
	}
}

function* categorySaga() {
	yield takeEvery(GET_CATEGORY, handleGetSaga)
}

export default categorySaga
