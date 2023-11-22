import { FC, useState } from 'react'
import styles from './InputBox.module.css'

interface Props {
	value: string
	label?: string
	onChange: (value: string) => void
}

const InputBox: FC<Props> = ({ value, label, onChange }) => {
	// const [value, setValue] = useState('')
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		onChange(e.target.value)
	}

	return (
		<div className={styles.inputWrapper}>
			<input
				type="text"
				required
				value={value}
				onChange={handleOnChange}
			/>
			{label ? <label>{label}</label> : null}
		</div>
	)
}

export default InputBox
