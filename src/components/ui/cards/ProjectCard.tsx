import { FC } from 'react'
import styles from './ProjectCard.module.css'
import Button from '../buttons/Button'
import { ButtonVariant } from '../../../enums/ButtonVariant.enum'

interface Props {
	toolsUsed?: string[]
	title: string
	description: string
	isCached?: boolean
	link: string
}

const ProjectCard: FC<Props> = ({
	toolsUsed,
	description,
	isCached,
	link,
	title,
}) => {
	return (
		<div className={styles.projectWrapper}>
			<div className={styles.toolsWrapper}>
				{toolsUsed?.map((tool) => (
					<div>{tool}</div>
				))}
			</div>
			<div className={styles.projectBody}>
				<div className={styles.titleText}>{title}</div>
				<div className={styles.descriptionText}>{description}</div>
				<div className={styles.actionWrapper}>
					<Button link={link}>{'Try it <~>'}</Button>
					{isCached ? (
						<Button variant={ButtonVariant.SECONDARY} disabled>
							{'Cached >='}
						</Button>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
