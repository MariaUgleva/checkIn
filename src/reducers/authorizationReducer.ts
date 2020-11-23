import { Reducer } from 'redux';
import { LogActions, AuthorizationActionTypes } from '../actions/authorizationActions';

const authorizationReducer: Reducer<boolean, LogActions> = (state: boolean = false, action) => {
	switch (action.type) {
		case AuthorizationActionTypes.LOG_IN:
			return true;
		case AuthorizationActionTypes.LOG_OUT:
			return false;
		default:
			return state;
	}
};
export default authorizationReducer;
