/// <reference types="react" />
import { CSSProp } from 'styled-components';
import { PartialDeep } from 'type-fest';
import { ButtonThemeType } from './Button.theme';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    $css?: CSSProp | string;
    $buttonStyle?: 'fill' | 'border';
    customTheme?: PartialDeep<ButtonThemeType>;
    loading?: boolean;
    $width?: number | string;
}