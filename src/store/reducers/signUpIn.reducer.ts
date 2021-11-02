import { singUpInUnionType, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE, RESET_SIGNUP, SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions/signUpIn.actions'

export interface signUpInState {
	signUpInfo: {
		loaded: boolean
		success: boolean
		message: string
	}
	signInInfo: {
		loaded: boolean
		success: boolean
		message: string
	}
}
const initalState: signUpInState = {
	signUpInfo: {
		loaded: false,
		success: false,
		message: ''
	},
	signInInfo: {
		loaded: false,
		success: false,
		message: ''
	}
}

function signUpInReducer(state = initalState, action: singUpInUnionType) {
	let signUpInState: signUpInState = state
	switch (action.type) {
		case SIGNUP:
			signUpInState = {
				...state,
				signUpInfo: {
					loaded: false,
					success: false,
					message: ''
				}
			}
			break
		case SIGNUP_SUCCESS:
			signUpInState = {
				...state,
				signUpInfo: {
					loaded: true,
					success: true,
					message: '恭喜注册成功'
				}
			}
			break
		case SIGNUP_FAILURE:
			signUpInState = {
				...state,
				signUpInfo: {
					loaded: true,
					success: false,
					message: action.payload.message
				}
			}
			break
		case RESET_SIGNUP:
			signUpInState = {
				...state,
				signUpInfo: {
					loaded: false,
					success: false,
					message: ''
				}
			}
			break

		case SIGNIN:
			signUpInState = {
				...state,
				signInInfo: {
					loaded: false,
					success: false,
					message: ''
				}
			}
			break
		case SIGNIN_SUCCESS:
			signUpInState = {
				...state,
				signInInfo: {
					loaded: true,
					success: true,
					message: ''
				}
			}
			break
		case SIGNIN_FAILURE:
			signUpInState = {
				...state,
				signInInfo: {
					loaded: true,
					success: false,
					message: action.message
				}
			}
			break
		default:
			return state
	}
	return signUpInState
}

export default signUpInReducer
