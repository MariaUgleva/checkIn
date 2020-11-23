import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';

export type AppState = {
	authorization: boolean;
};

const rootReducer = combineReducers<AppState>({
	authorization: authorizationReducer,
});
export default rootReducer;
