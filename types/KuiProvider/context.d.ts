import React from 'react';
import { defaultThemes } from '../themes';
export interface KuiContextProps {
    theme: typeof defaultThemes;
    setTheme?: (theme?: Partial<typeof defaultThemes>) => void;
}
export declare const KuiContext: React.Context<KuiContextProps>;
