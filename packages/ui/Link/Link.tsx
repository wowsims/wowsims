export type LinkProps = JSX.HTMLElementProps<'a'> &
	Partial<Pick<JSX.GlobalHTMLAttributes, 'role'>> & {
		variant?: undefined;
		// tsx-vanilla has String type for href (typo)
		href?: string;
		// as button
		// - Adds href="javascript:void(0)"
		// - Adds role="button"
		as?: 'button';
	};

export const Link = ({ ref, as, className, children, href, role, attributes, ...props }: LinkProps) => {
	const additionalProps: Partial<JSX.HTMLElementProps<'a'>> = {
		attributes: {},
	};

	if (as === 'button') {
		additionalProps.href = 'javascript:void(0)';
		additionalProps.attributes!.role = 'button';
	}

	return (
		<a ref={ref} {...additionalProps} href={href} className={className} attributes={{ ...attributes, ...additionalProps.attributes, role }} {...props}>
			{children}
		</a>
	) as HTMLAnchorElement;
};
