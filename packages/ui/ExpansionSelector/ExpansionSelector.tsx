import './ExpansionSelector.scss';

import { BASE_URL } from '@wowsims/constants';
import { Expansion, EXPANSIONS } from '@wowsims/constants/expansion';
import clsx from 'clsx';

import { Button } from '../Button';
import { Link, LinkProps } from '../Link';

export type ExpansionSelectorProps = {
	expansion: Expansion;
};

export const ExpansionSelector = ({ expansion }: ExpansionSelectorProps) => {
	const selectedExpansion = EXPANSIONS[expansion];

	return (
		<div className="dropdown expansion-selector">
			<Button
				variant="link"
				className={clsx('dropdown-toggle', 'expansion-selector-btn', `text-${selectedExpansion.theme}`)}
				dataset={{
					bsToggle: 'dropdown',
				}}
				attributes={{
					'aria-expanded': false,
				}}>
				<ExpansionIcon src={selectedExpansion.iconURI} />
				{selectedExpansion.name}
			</Button>
			<ul className="dropdown-menu dropdown-menu-end">
				<ExpansionListItem className="home" href={BASE_URL} imageSrc="@wowsims/assets/images/wowsims-icon.png" label="WoWSims Home" />
				{Object.entries(EXPANSIONS).map(([_, expansionData]) => (
					<ExpansionListItem
						className={`expansion-${expansionData.theme}`}
						href={expansionData.link}
						imageSrc={expansionData.iconURI}
						label={expansionData.name}
					/>
				))}
			</ul>
		</div>
	);
};

const ExpansionListItem = ({
	className,
	href,
	imageSrc,
	label,
}: Pick<LinkProps, 'className' | 'href'> & {
	imageSrc: string;
	label: string;
}) => (
	<li>
		<Link className={clsx('dropdown-item', 'expansion-dropdown-item', className)} href={href}>
			<ExpansionIcon src={imageSrc} />
			{label}
		</Link>
	</li>
);

const ExpansionIcon = ({ src }: JSX.HTMLElementProps<'img'>) => <img className="expansion-selector-icon" src={src} />;
