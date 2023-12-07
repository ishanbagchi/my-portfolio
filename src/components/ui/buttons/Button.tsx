import { FC } from 'react'
import { ButtonVariant } from '../../../enums/ButtonVariant.enum'
import styles from './Button.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	disabled?: boolean
	className?: string
	children?: React.ReactNode
}

const Button: FC<Props> = ({
	variant = ButtonVariant.PRIMARY,
	disabled = false,
	className,
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
		<button
			className={`${styles.btn} ${getVariantClassNames()} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
