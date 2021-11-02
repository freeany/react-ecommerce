/**
 * 创建action
 * 注册相关的action有三个
 *  1.注册  2.注册成功  3.注册失败
 */
export const SIGNUP = 'SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
export const RESET_SIGNUP = 'RESET_SIGNUP'
// 登录
export const SIGNIN = 'SIGNIN'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE'

export interface SignUpPayloadInterface {
	name: string
	password: string
	email: string
}

// 定义action的类型，  即触发的action的类型
export interface SignUpActionInterface {
	type: typeof SIGNUP
	payload: SignUpPayloadInterface
}

export interface SignUpSuccessActionInterface {
	type: typeof SIGNUP_SUCCESS
}

export interface SignUpFailureActionInterface {
	type: typeof SIGNUP_FAILURE
	payload: {
		message: string
	}
}

// 重置注册state数据
export interface ResetSignUpInterface {
	type: typeof RESET_SIGNUP
}

// 导出actionCreator
export const signUpAction_saga = (payload: SignUpPayloadInterface): SignUpActionInterface => ({ type: SIGNUP, payload })
export const signUpSuccessAction = (): SignUpSuccessActionInterface => ({ type: SIGNUP_SUCCESS })
export const signUpFailureAction = (message: string): SignUpFailureActionInterface => ({ type: SIGNUP_FAILURE, payload: { message } })
export const resetSignUpAction = (): ResetSignUpInterface => ({ type: RESET_SIGNUP })

// 登录 ---------------------------------
export interface SignInPayloadInterface {
	email: string
	password: string
}
export interface SignInActionInterface {
	type: typeof SIGNIN
	payload: SignInPayloadInterface
}
export interface SignInSuccessActionInterface {
	type: typeof SIGNIN_SUCCESS
}
export interface SignInFailureActionInterface {
	type: typeof SIGNIN_FAILURE
	message: string
}
// 导出action creator
export const signInAction_saga = (payload: SignInPayloadInterface): SignInActionInterface => ({ type: SIGNIN, payload })
export const signInSuccessAction = (): SignInSuccessActionInterface => ({ type: SIGNIN_SUCCESS })
export const signInFailureAction = (message: string): SignInFailureActionInterface => ({ type: SIGNIN_FAILURE, message })
// 导出联合类型给reducer使用
export type singUpInUnionType =
	| SignUpActionInterface
	| SignUpSuccessActionInterface
	| SignUpFailureActionInterface
	| ResetSignUpInterface
	| SignInActionInterface
	| SignInSuccessActionInterface
	| SignInFailureActionInterface
