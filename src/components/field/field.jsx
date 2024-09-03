import { useEffect, useState } from 'react';
import { onCellClick } from '../../handlers';
import { store } from '../../store';
import { FieldLayout } from './field-layout';

export const Field = () => {
	const [state, setState] = useState(store.getState());
	const { field } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, []);

	return <FieldLayout field={field} onCellClick={onCellClick} />;
};
