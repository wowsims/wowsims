import { element, ref, fragment } from 'tsx-vanilla';

export type LinkProps = JSX.HTMLElementProps<'a'> & {
	variant?: undefined;
	// tsx-vanilla has String type for href (typo)
	href: string;
};

export const Link = ({ ref, className, children, variant, href, attributes, ...props }: LinkProps) => {
	return (
		<a ref={ref} href={href} className={className} attributes={attributes} {...props}>
			{children}
		</a>
	);
};
