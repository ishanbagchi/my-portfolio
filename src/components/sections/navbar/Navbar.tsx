import { FC } from 'react'
import styles from './Navbar.module.css'
import NavLinks from './NavLinks'

interface Props {}

const Navbar: FC<Props> = ({}) => {
	return (
		<nav className={styles.navWrapper}>
			<div className={styles.logo}>Ishan</div>
			<div className={styles.navLinks}>
				<NavLinks />
			</div>
		</nav>
	)
}

export default Navbar
