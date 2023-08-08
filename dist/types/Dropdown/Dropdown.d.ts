import React from 'react';
import { DropdownProps } from './Dropdown.type';
declare const Dropdown: <T extends string | number>(props: DropdownProps<T>) => React.JSX.Element;
export default Dropdown;
