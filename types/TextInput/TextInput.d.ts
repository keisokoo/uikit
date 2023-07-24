import React from 'react';
import { TextInputProps } from './TextInput.type';
declare const TextInput: {
    (props: TextInputProps & {
        $radius?: number | string;
    }): React.JSX.Element;
    Underline: (props: TextInputProps) => React.JSX.Element;
};
export default TextInput;
