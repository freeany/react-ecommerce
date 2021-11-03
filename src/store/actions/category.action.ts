import { Category } from '../models/category'
export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'

export interface GetCategoryAction {
	type: typeof GET_CATEGORY
}

export interface GetCategorySuccessAction {
	type: typeof GET_CATEGORY_SUCCESS
	payload: Category[]
}

export const getCategoryAction = (): GetCategoryAction => ({ type: GET_CATEGORY })
export const getCategorySuccessAction = (payload: Category[]): GetCategorySuccessAction => ({ type: GET_CATEGORY_SUCCESS, payload })

export type categoryActionsInterface = GetCategoryAction | GetCategorySuccessAction
