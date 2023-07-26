import 'styled-components'
declare module '*.module.scss' {
  const content: { [className: string]: string }
  export default content
}
