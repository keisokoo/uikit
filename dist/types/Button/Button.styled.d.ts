/// <reference types="react" />
import { CSSProp, RuleSet } from 'styled-components';
import { ButtonThemeType } from './Button.theme';
interface ButtonProps {
    $css?: CSSProp | string | RuleSet<object>;
    theme: ButtonThemeType;
}
type ButtonStyleProps = {
    $pending?: boolean;
    $radius?: number | string;
    $buttonStyle?: 'fill' | 'border';
    $width?: number | string;
};
declare const ButtonStyle: {
    Wrap: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonProps & ButtonStyleProps>>;
};
export default ButtonStyle;
