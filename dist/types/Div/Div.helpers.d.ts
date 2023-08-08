/// <reference types="react" />
import { CSSProp } from 'styled-components';
import { AddCssProps } from './Div.type';
export declare function convertObjectToCSS(styles: React.CSSProperties, inline?: boolean): string;
export declare const AddCss: <T>(props: AddCssProps<T>) => CSSProp;
