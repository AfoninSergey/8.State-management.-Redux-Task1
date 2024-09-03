import { PLAYER, STATUS } from '../constants';
import { store } from '../store';
import { checkEmptyCell, checkWin } from '../utils';

export const onCellClick = (cellIndex) => {
	const { status, field, currentPlayer } = store.getState();

	if (status === STATUS.WIN || field[cellIndex] !== PLAYER.NOBODY) return;

	const newField = [...field];
	newField[cellIndex] = currentPlayer;
	store.dispatch({ type: 'SET_FIELD', payload: newField });

	if (checkWin(newField, currentPlayer)) {
		store.dispatch({ type: 'SET_STATUS', payload: STATUS.WIN });
	} else if (checkEmptyCell(newField)) {
		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS,
		});
	} else {
		store.dispatch({ type: 'SET_STATUS', payload: STATUS.DRAW });
		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: PLAYER.NOBODY,
		});
	}
};
