import * as types from '../../actions/types';

const initialState = {
	user: null,
};

export const userReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.LOG_IN:
			return {
				user: payload,
			};

		case types.LOG_OUT:
			return {
				user: null,
			};

		default:
			return state;
	}
};
