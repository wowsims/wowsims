import React from 'react';
export declare enum Expansion {
    SOD = 0,
    TBC = 1,
    WOTLK = 2,
    CATA = 3
}
export interface ExpansionData {
    name: string;
    theme: string;
    link: string;
    iconURI: string;
}
export declare const EXPANSIONS: Record<Expansion, ExpansionData>;
interface ExpansionSelectorProps {
    defaultSelection: Expansion;
}
export declare const ExpansionSelector: ({ defaultSelection }: ExpansionSelectorProps) => React.JSX.Element;
export {};
