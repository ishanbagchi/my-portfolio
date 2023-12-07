import { FC } from 'react'
import styles from './NavLinks.module.css'
import { HEADER_LINKS } from '../../../constants/navbar'

interface Props {}

const NavLinks: FC<Props> = ({}) => {
	return (
		<div className={styles.navLinksWrapper}>
			{HEADER_LINKS.map((link, index) => (
				<div key={index} className={styles.navLink}>
					<span>#</span>
					{link.name}
				</div>
			))}
		</div>
	)
}

export default NavLinks
