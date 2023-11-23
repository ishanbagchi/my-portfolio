import { FC } from 'react'
import styles from './Home.module.css'
import { MAIN_TEXT } from '../../../constants/home/home'
import mainImage from '../../../assets/images/ishan-main.png'
import Button from '../../ui/buttons/Button'
import Status from './Status'

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
					<div className={styles.subText}>
						He crafts responsive websites where technologies meet
						creativity
					</div>
					<Button className={styles.mainButton}>Contact Me!!</Button>
				</div>
				<div>
					<img className={styles.image} src={mainImage} alt="Ishan" />
					<Status />
				</div>
			</div>
		</section>
	)
}

export default Home
