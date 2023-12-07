import { FC } from 'react'
import styles from './ProjectHeader.module.css'
import SectionHead from '../../ui/section-heads/SectionHead'

interface Props {}

const ProjectHeader: FC<Props> = ({}) => {
	return (
		<div className={styles.projectHeaderWrapper}>
			<div className={styles.textWrapper}>
				<SectionHead value="projects" />
				<div className={styles.headerLine} />
			</div>
			<div className={styles.viewAllBtn}>{`View all ~~>`}</div>
		</div>
	)
}

export default ProjectHeader
