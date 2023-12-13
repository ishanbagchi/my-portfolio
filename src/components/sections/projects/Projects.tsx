import { FC } from 'react'
import styles from './Projects.module.css'
import ProjectHeader from './ProjectHeader'
import ProjectList from './ProjectList'

interface Props {}

const Projects: FC<Props> = ({}) => {
	return (
		<div>
			<ProjectHeader />
			<ProjectList />
		</div>
	)
}

export default Projects
