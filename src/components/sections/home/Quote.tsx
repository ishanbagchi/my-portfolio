import { FC } from 'react'
import styles from './Quote.module.css'

interface Props {}

const Quote: FC<Props> = ({}) => {
	return (
		<div className={styles.quoteWrapper}>
			<div className={styles.quoteTextWrapper}>
				{/* <div className={styles.invertedCommaTop} /> */}
				<div className={styles.quoteText}>
					With great power comes great electricity bill
				</div>
				{/* <div className={styles.invertedCommaBottom} /> */}
			</div>
			<div className={styles.quoteAuthor}>- Dr. Who</div>
		</div>
	)
}

export default Quote
