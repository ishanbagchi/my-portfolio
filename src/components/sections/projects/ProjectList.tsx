import { FC } from 'react'

interface Props {}

const ProjectList: FC<Props> = ({}) => {
	return (
		<section>
			{mainProjects.map((project) => {
				return (
					<div key={project.id}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						{project.isCached ? <p>Cached</p> : null}
						<p>{project.link}</p>
					</div>
				)
			})}
		</section>
	)
}

export default ProjectList
