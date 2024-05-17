import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import clsx from 'clsx';

export type IconProps = Omit<JSX.HTMLElementProps<'i'>, 'children'> & {
	type?: Omit<IconPrefix, 'fak' | 'fass' | 'fasr' | 'fasl' | 'fast'>;
	size?: '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
	isFixedWidth?: boolean;
	isInList?: boolean;
	icon: IconName;
};

type IconListWrapperProps = Pick<JSX.HTMLElementProps<'span'>, 'children'> & Pick<IconProps, 'isInList'>;

const ListWrapper = ({ isInList, children }: IconListWrapperProps) => (isInList ? <span className="fa-li">{children}</span> : <>{children}</>);

export const Icon = ({ ref, type = 'fas', icon, size, isFixedWidth, isInList, className, ...props }: IconProps) => {
	return (
		<ListWrapper isInList={isInList}>
			<i ref={ref} className={clsx(type, icon && `fa-${icon}`, size && `fa-${size}`, isFixedWidth && 'fa-fw', className)} {...props} />
		</ListWrapper>
	) as HTMLElement;
};
