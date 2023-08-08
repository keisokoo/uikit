import React from 'react';
import { PartialDeep } from 'type-fest';
import { DefaultThemes } from '../themes';
export interface KuiProviderProps {
    children: React.ReactNode;
    theme?: PartialDeep<DefaultThemes>;
}
export declare const KuiProvider: ({ children, theme }: KuiProviderProps) => React.JSX.Element;
