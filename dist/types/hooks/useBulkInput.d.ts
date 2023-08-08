type DeepKeyOf<T> = T extends object ? {
    [K in Extract<keyof T, string>]: K | `${K}.${DeepKeyOf<T[K]>}`;
}[Extract<keyof T, string>] : never;
type ValueOfDeepKey<T, K extends string> = K extends `${infer K1}.${infer K2}` ? K1 extends keyof T ? ValueOfDeepKey<T[K1], K2> : never : K extends keyof T ? T[K] : never;
export type HandleInputFunction<T> = <K extends keyof T>(target: K, value: T[K] | ((inputs: T) => T[K]), callBack?: ((next: T) => T) | undefined) => Promise<void>;
export interface MatchInputProps<T> {
    inputs: T;
    isMatched: boolean;
    existInputs: T;
    handleInput: HandleInputFunction<T>;
    handleValues: (next: T | ((prev: T) => T)) => void;
    pickAndUpdate: <K extends DeepKeyOf<T>>(target: K, value: ValueOfDeepKey<T, K>) => void;
    fetchInit: (value: T) => void;
    returnToOriginal: () => void;
    restoreValues: () => void;
    InputAttributes: (inputsKeyName: keyof T) => void;
    restoreByKeyNames: (keyNames: (keyof T)[]) => void;
}
export declare const useBulkInput: <T extends object>(initialValue: T) => {
    readonly inputs: T;
    readonly existInputs: T;
    readonly isMatched: boolean;
    readonly syncCurrentValue: () => void;
    readonly pickAndUpdate: <K extends DeepKeyOf<T>>(target: K, value: ValueOfDeepKey<T, K>) => void;
    readonly fetchInit: (next: T | ((prev: T) => T)) => void;
    readonly handleValues: (next: T | ((prev: T) => T)) => void;
    readonly handleInput: HandleInputFunction<T>;
    readonly returnToOriginal: () => void;
    readonly restoreValues: () => void;
    readonly InputAttributes: (inputsKeyName: keyof T) => {
        value: T[keyof T];
        handleValue: (value: T[keyof T]) => Promise<void>;
    };
    readonly restoreByKeyNames: (keyNames: (keyof T)[]) => void;
};
export {};
