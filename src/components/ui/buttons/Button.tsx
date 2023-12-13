import { FC } from 'react'
import { ButtonVariant } from '../../../enums/ButtonVariant.enum'
import styles from './Button.module.css'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	disabled?: boolean
	className?: string
	link?: string
	children?: React.ReactNode
}

const Button: FC<Props> = ({
	variant = ButtonVariant.PRIMARY,
	disabled = false,
	link,
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
	const classNames = `${styles.btn} ${getVariantClassNames()} ${
		disabled ? styles.disabled : ''
	} ${className}`

	return link ? (
		<a href={link} className={classNames} target="_blank" rel="noreferrer">
			{children}
		</a>
	) : (
		<button className={classNames} {...props}>
			{children}
		</button>
	)
}

export default Button
