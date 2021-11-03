import { categoryActionsInterface, GET_CATEGORY, GET_CATEGORY_SUCCESS } from '../actions/category.action'
const initalState = {
	category: {
		loaded: false,
		success: false,
		result: []
	}
}

function categoryReducer(state = initalState, action: categoryActionsInterface) {
	switch (action.type) {
		case GET_CATEGORY:
			return {
				...state,
				category: {
					loaded: false,
					success: false,
					result: []
				}
			}
		case GET_CATEGORY_SUCCESS:
			return {
				...state,
				category: {
					loaded: false,
					success: false,
					result: action.payload
				}
			}
		default:
			return state
	}
}

export default categoryReducer
