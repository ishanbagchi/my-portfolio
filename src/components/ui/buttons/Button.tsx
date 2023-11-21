import { FC } from 'react'
import { ButtonVariant } from '../../enums/ButtonVariant.enum'
import styles from './Button.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	disabled?: boolean
	children?: React.ReactNode
}

const Button: FC<Props> = ({
	variant = ButtonVariant.PRIMARY,
	disabled = false,
	children,
	...props
}) => {
	const getVariantClassNames = (): string => {
		switch (variant) {
			case ButtonVariant.PRIMARY:
				return styles.primary
			case ButtonVariant.SECONDARY:
				return styles.secondary
			default:
				return styles.primary
		}
	}
	return (
		<div>
			<button
				className={`${styles.btn} ${getVariantClassNames()}`}
				{...props}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
