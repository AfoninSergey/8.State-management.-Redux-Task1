import { EMPTY_FIELD, PLAYER, STATUS } from './constants';

const initialState = {
	field: EMPTY_FIELD,
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };
		case 'SET_FIELD':
			return { ...state, field: payload };
		case 'SET_STATUS':
			return { ...state, status: payload };
		case 'RESTART_GAME':
			return initialState;
		default:
			return state;
	}
};
