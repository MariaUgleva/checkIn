import { ActionCreator } from 'redux';
import {FormData} from '../type';

export enum AuthorizationActionTypes {
	LOG_IN = 'LOG_IN',
	LOG_OUT = 'LOG_OUT',
}
export type logInApp = {
	type: AuthorizationActionTypes.LOG_IN;
	data: FormData;
};
export type logOutApp = {
	type: AuthorizationActionTypes.LOG_OUT;
};
export type LogActions = logInApp | logOutApp;
// action для входа в систему
export const logInAppAction: ActionCreator<logInApp> = (data: FormData) => ({
	type: AuthorizationActionTypes.LOG_IN,
	data: data,
});
// action для выхода из системы
export const logOutAppAction: ActionCreator<logOutApp> = () => ({
    type: AuthorizationActionTypes.LOG_OUT,
});
