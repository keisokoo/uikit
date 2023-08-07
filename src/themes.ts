const colors = {
  transparent: 'transparent',
  foreground: '#e2dbdb',
  background: '#1c1c1c',
  white: '#FFFFFF',
  white70: '#ffffffb2',
  white50: '#ffffff7f',
  white30: '#ffffff4c',
  white20: '#ffffff2d',
  white10: '#ffffff19',
  gray0: '#d4cfca',
  gray1: '#cdcdcd',
  gray2: '#acacac',
  gray3: '#8f8f8f',
  gray4: '#6b6b6b',
  gray5: '#4a4a4a',
  gray6: '#313131',
  gray7: '#222020',
  fog: '#414141',
  black: '#000000',
  alert: '#D8310D',
  warning: '#EFAC00',
  success: '#1ED300',
  info: '#0094D3',
  primary: '#24b3f6',
}
const fonts = {
  default:
    'font-size:16px;font-weight:400;letter-spacing:-0.6000000238418579px;line-height:24px;',
  small:
    'font-size:14px;font-weight:400;letter-spacing:-0.6000000238418579px;line-height:20px;',
}
export const defaultThemes = { colors, fonts } as const
export type DefaultThemes = typeof defaultThemes
