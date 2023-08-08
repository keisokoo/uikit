import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CSSProp } from 'styled-components';
export interface CodeBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    $css?: CSSProp | string;
    children?: string;
    title?: string;
}
