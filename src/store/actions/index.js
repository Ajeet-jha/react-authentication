import * as types from './types';

export const login = (user) => ({
	type: types.LOG_IN,
	payload: user,
});

export const logout = () => ({
	type: types.LOG_OUT,
});
