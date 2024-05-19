import './variants/danger.scss';
import './variants/warning.scss';
import './variants/success.scss';

import { Icon, IconProps } from '../Icon';

export type LinkIcon = JSX.Element | IconProps['icon'];
export type LinkProps = JSX.HTMLElementProps<'a'> &
	Partial<Pick<JSX.GlobalHTMLAttributes, 'role'>> & {
		variant?: 'danger' | 'warning' | 'success';
		// tsx-vanilla has String type for href (typo)
		href?: string;
		// as button
		// - Adds href="javascript:void(0)"
		// - Adds role="button"
		as?: 'button';
		// String of IconProps's for the left icon
		iconLeft?: LinkIcon;
		// String of IconProps's for the right icon
		iconRight?: LinkIcon;
	};

const getIcon = (icon: LinkIcon, className?: string) => (typeof icon === 'string' ? <Icon icon={icon} className={className} /> : <>{icon}</>);

export const Link = ({ ref, as, className, children, href, role, attributes, iconLeft, iconRight, ...props }: LinkProps) => {
	const additionalProps: Partial<JSX.HTMLElementProps<'a'>> = {
		attributes: {},
	};

	if (as === 'button') {
		additionalProps.href = 'javascript:void(0)';
		additionalProps.attributes!.role = 'button';
	}

	return (
		<a ref={ref} href={href} className={className} {...additionalProps} attributes={{ ...attributes, role, ...additionalProps.attributes }} {...props}>
			{iconLeft && getIcon(iconLeft, children ? 'me-1' : undefined)}
			{children}
			{iconRight && getIcon(iconRight, children ? 'ms-1' : undefined)}
		</a>
	) as HTMLAnchorElement;
};
