import { WIN_PATTERNS } from '../constants';

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((winPattern) =>
		winPattern.every((winIndex) => field[winIndex] === currentPlayer),
	);
