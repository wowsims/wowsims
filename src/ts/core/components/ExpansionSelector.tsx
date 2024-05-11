import clsx from 'clsx'
import React from 'react'
import { BASE_URL } from '../constants'
import CataLogo from '../../../../assets/img/expansion-logo-cata.png'

export enum Expansion {
  SOD,
  TBC,
  WOTLK,
  CATA,
}

export interface ExpansionData {
  name: string
  // CSS theme identifier
  theme: string
  // Live site link
  link: string
  // Icon link
  iconURI: string
}

export const EXPANSIONS: Record<Expansion, ExpansionData> = {
  [Expansion.SOD]: {
    name: 'Season of Discovery',
    theme: 'sod',
    link: 'https://wowsims.github.io/sod',
    iconURI: 'assets/img/expansion-icon-classic.png',
  },
  [Expansion.TBC]: {
    name: 'The Burning Crusade',
    theme: 'tbc',
    link: 'https://wowsims.github.io/tbc',
    iconURI: 'assets/img/expansion-icon-tbc.png',
  },
  [Expansion.WOTLK]: {
    name: 'Wrath of the Lich King',
    theme: 'wotlk',
    link: 'https://wowsims.github.io/wotlk',
    iconURI: 'assets/img/expansion-icon-wotlk.png',
  },
  [Expansion.CATA]: {
    name: 'Cataclysm',
    theme: 'cata',
    link: 'https://wowsims.github.io/cata',
    iconURI: 'assets/img/expansion-icon-cata.png',
  },
}

interface ExpansionSelectorProps {
  defaultSelection: Expansion
}

export const ExpansionSelector = ({ defaultSelection }: ExpansionSelectorProps) => {
  const selectedExpansion = EXPANSIONS[defaultSelection]

  return (
    <div className='dropdown expansion-selector'>
      <button
        className={clsx(
          'btn',
          'btn-link',
          'dropdown-toggle',
          'expansion-selector-btn',
          `text-${selectedExpansion.theme}`,
        )}
        type='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <img className='expansion-selector-icon' src={selectedExpansion.iconURI} />
        {selectedExpansion.name}
      </button>
      <ul className='dropdown-menu dropdown-menu-end'>
        <li>
          <a className='dropdown-item text-brand' href={BASE_URL}>
            <img className='expansion-selector-icon' src='assets/img/wowsims-icon.png' />
            WoWSims Home
          </a>
        </li>
        {Object.entries(EXPANSIONS).map(([expansionId, expansionData]) => {
          return (
            <li key={expansionId}>
              <a className={clsx('dropdown-item', `expansion-${expansionData.theme}`)} href={expansionData.link}>
                <img className='expansion-selector-icon' src={expansionData.iconURI} />
                {expansionData.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
