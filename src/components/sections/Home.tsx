import { FC } from 'react'
import styles from './Home.module.css'
import { MAIN_TEXT } from '../../constants/home/home'

interface Props {}

const Home: FC<Props> = ({}) => {
	return (
		<section>
			<div className={styles.homeMainWrapper}>
				<div className={styles.textWrapper}>
					<div className={styles.mainText}>
						Ishan is a <span>web designer</span> and{' '}
						<span>full stack developer</span>
					</div>
				</div>
				<div>Ishan</div>
			</div>
		</section>
	)
}

export default Home
