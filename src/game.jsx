
import styles from './game.module.css';
import { Information, Field } from './components';
import { onRestart } from './handlers';

export const Game = () => (
	<div className={styles.game}>
		<Information />
		<Field />
		<button onClick={onRestart}>Начать заново</button>
	</div>
);
