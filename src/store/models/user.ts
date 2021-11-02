export interface User {
	_id: string
	name: string
	email: string
	role: number
}
export interface JWT {
	token: string
	user: User
}
