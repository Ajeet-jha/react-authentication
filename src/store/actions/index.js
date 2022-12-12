import * as types from './types';

export const login = (data) => ({
	type: types.LOG_IN,
	payload: data,
});

export const logout = () => ({
	type: types.LOG_OUT,
});
