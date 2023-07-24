import React from 'react';
import { defaultThemes } from '../themes';
interface StyledProviderProps {
    children: React.ReactNode;
    theme?: typeof defaultThemes;
}
export declare const StyledProvider: ({ children, theme }: StyledProviderProps) => React.JSX.Element;
export {};
