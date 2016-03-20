import * as types from './constants/ActionTypes'

export function signUp({email}) {
	return { type: types.SIGN_UP, email }
}
