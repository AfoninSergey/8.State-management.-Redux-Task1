import { store } from '../store';
export const onRestart = () => {
	store.dispatch({type: 'RESTART_GAME'})
};

