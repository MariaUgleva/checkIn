import { ActionCreator } from 'redux';

export enum AuthorizationActionTypes {
	LOG_IN = 'LOG_IN',
	LOG_OUT = 'LOG_OUT',
}
export type logInApp = {
	type: AuthorizationActionTypes.LOG_IN;
};
export type logOutApp = {
	type: AuthorizationActionTypes.LOG_OUT;
};
export type LogActions = logInApp | logOutApp;

export const logInAppAction: ActionCreator<logInApp> = () => ({
    type: AuthorizationActionTypes.LOG_IN,
});
export const logOutAppAction: ActionCreator<logOutApp> = () => ({
    type: AuthorizationActionTypes.LOG_OUT,
});
