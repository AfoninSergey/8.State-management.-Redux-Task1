import { useEffect, useState } from 'react';
import { PLAYER_ACTION, PLAYER_NAME } from '../../constants';
import { InformationLayout } from './information-layout';
import { store } from '../../store';

export const Information = () => {
	const [state, setState] = useState(store.getState());
	const { status, currentPlayer } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, []);

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information = `${playerAction} ${playerName}`;

	return <InformationLayout information={information} />;
};
