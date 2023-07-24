import { colors, fonts } from '../themes'

const TextInputTheme = {
  color: {
    iconFocusColor: colors.primary,
    box: {
      textColor: colors.foreground,
      textDisabledColor: colors.gray5,
      backgroundColor: colors.gray6,
      backgroundFocusColor: colors.fog,
      borderColor: colors.gray2,
      borderFocusColor: colors.primary,
      placeholderColor: colors.gray3,
      borderDisabledColor: colors.white30,
      iconFocusColor: colors.primary,
    },
    underline: {
      textColor: colors.foreground,
      textDisabledColor: colors.gray5,
      backgroundFocusColor: colors.gray6,
      borderColor: colors.gray2,
      borderFocusColor: colors.primary,
      placeholderColor: colors.gray3,
      borderDisabledColor: colors.white30,
      iconFocusColor: colors.primary,
    },
  },
  textStyle: {
    default: fonts.default,
  },
} as const
export default TextInputTheme
