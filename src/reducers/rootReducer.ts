import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import profileReducer from './profileReducer';
import {ProfileType} from '../type';

export type AppState = {
	authorization: boolean;
	profile: ProfileType
};

const rootReducer = combineReducers<AppState>({
	authorization: authorizationReducer,
	profile: profileReducer
});
export default rootReducer;
