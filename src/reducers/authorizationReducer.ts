import { Reducer } from 'redux';
import { LogActions, AuthorizationActionTypes } from '../actions/authorizationActions';
const initialvalue = !!(localStorage.getItem('authorization') === 'true');
const authorizationReducer: Reducer<boolean, LogActions> = (state: boolean = initialvalue, action) => {
	switch (action.type) {
		case AuthorizationActionTypes.LOG_IN:
			if (action.data.username === 'Admin' && action.data.password === '12345') {localStorage.setItem('authorization', 'true'); return true}
			else {localStorage.setItem('authorization', 'false'); return false };
		case AuthorizationActionTypes.LOG_OUT:
			localStorage.setItem('authorization', 'false'); return false;
		default:
			return state;
	}
};
export default authorizationReducer;
