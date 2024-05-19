import './variants/close.scss';
import './variants/reset.scss';

import clsx from 'clsx';

import { Icon, IconProps } from '../Icon/Icon';

export type ButtonVariant = 'primary' | 'outline-primary' | 'secondary' | 'outline-secondary' | 'link' | 'warning' | 'danger' | 'close' | 'reset' | 'clear';

export type ButtonSize = 'sm' | 'lg';
export type ButtonIcon = JSX.Element | IconProps['icon'];
export type ButtonProps = JSX.HTMLElementProps<'button'> & {
	// If variant is defined we will add the .btn class as well
	variant?: ButtonVariant;
	size?: ButtonSize;
	// String of IconProps's for the left icon
	iconLeft?: ButtonIcon;
	// String of IconProps's for the right icon
	iconRight?: ButtonIcon;
};

const getIcon = (icon: ButtonIcon) => (typeof icon === 'string' ? <Icon icon={icon} /> : <>{icon}</>);

export const Button = ({ ref, className, children, variant, size, type = 'button', iconLeft, iconRight, ...props }: ButtonProps) => {
	return (
		<button
			ref={ref}
			className={clsx(variant && variant !== 'close' && `btn`, variant && `btn-${variant}`, size && `btn-${size}`, className)}
			type={type}
			{...props}>
			{iconLeft && getIcon(iconLeft)}
			{children}
			{iconRight && getIcon(iconRight)}
		</button>
	);
};
