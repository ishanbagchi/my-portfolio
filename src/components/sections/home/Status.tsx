import { FC } from 'react'
import styles from './Status.module.css'

interface Props {}

const Status: FC<Props> = ({}) => {
	return (
		<div className={styles.statusWrapper}>
			<div className={styles.statusBox} />
			<div className={styles.statusText}>
				Currently working on <span>Portfolio</span>
			</div>
		</div>
	)
}

export default Status
