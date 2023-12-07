import { FC } from 'react'
import styles from './Status.module.css'

interface Props {
	className?: string
}

const Status: FC<Props> = ({ className }) => {
	return (
		<div className={`${styles.statusWrapper} ${className}`}>
			<div className={styles.statusBox} />
			<div className={styles.statusText}>
				Currently working on <span>Portfolio</span>
			</div>
		</div>
	)
}

export default Status
