import { FC } from 'react'
import styles from './SectionHead.module.css'

interface Props {
	value: string
}

const SectionHead: FC<Props> = ({ value }) => {
	return (
		<div className={styles.titleWrapper}>
			<span>#</span>
			{value}
		</div>
	)
}

export default SectionHead
