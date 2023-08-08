/// <reference types="react" />
import { CSSProp } from 'styled-components';
import { DropdownThemeType } from './Dropdown.theme';
interface DropdownProps {
    $css?: CSSProp | string;
    $width?: number | string;
    theme: DropdownThemeType;
}
declare const DropdownStyle: {
    Wrap: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DropdownProps>>;
    Label: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DropdownProps>>;
    List: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DropdownProps>>;
    Item: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DropdownProps>>;
};
export default DropdownStyle;
