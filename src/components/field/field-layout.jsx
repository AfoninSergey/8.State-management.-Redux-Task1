import { PLAYER_ICON } from '../../constants';
import styles from './field.module.css';

export const FieldLayout = ({ field, onCellClick }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, i) => (
			<button
				key={i}
				type="button"
				className={styles.cell}
				onClick={() => onCellClick(i)}
			>
				{PLAYER_ICON[cellPlayer]}
			</button>
		))}
	</div>
);
