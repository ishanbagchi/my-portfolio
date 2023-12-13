import { FC } from 'react'
import { mainProjects } from '../../../constants/projects'
import ProjectCard from '../../ui/cards/ProjectCard'
import styles from './ProjectList.module.css'

interface Props {}

const ProjectList: FC<Props> = ({}) => {
	return (
		<section className={styles.projectListWrapper}>
			{mainProjects.map((project) => {
				return (
					<ProjectCard
						key={project.id}
						toolsUsed={project.tools}
						title={project.title}
						description={project.description}
						isCached={project.isCached}
						link={project.link}
					/>
				)
			})}
		</section>
	)
}

export default ProjectList
