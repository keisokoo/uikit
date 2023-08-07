import StringCase from 'case'
import fsDefault, { promises } from 'fs'
import { stdin as input, stdout as output } from 'node:process'
import readline from 'node:readline'
import shell from 'shelljs'
const rl = readline.createInterface({ input, output })
const fs = promises
const { pascal } = StringCase

async function createComponent(value: string, location: string) {
  await fs.writeFile(location, value)
}

function indexString(answer: string) {
  const pascalName = pascal(answer)
  return `export { default as ${pascalName} } from './${pascalName}'
  export type { ${pascalName}Props } from './${pascalName}.type'
  `
}
function componentString(answer: string) {
  const pascalName = pascal(answer)
  return `'use client'
  import React from 'react'
  import ${pascalName}Style from './${pascalName}.styled'
  import { ${pascalName}Props } from './${pascalName}.type'
  import { ${pascalName}Provider } from './${pascalName}.theme'
  
  const { Wrap } = ${pascalName}Style
  
  const Default${pascalName} = ({ $css, customTheme, ...props }: ${pascalName}Props) => {
    return (
      <${pascalName}Provider customTheme={customTheme}>
        <Wrap $css={$css} {...props}>
          ${pascalName}
        </Wrap>
      </${pascalName}Provider>
    )
  }
  
  const ${pascalName} = (props: ${pascalName}Props) => {
    return <Default${pascalName} {...props} />
  }

  export default ${pascalName}
  `
}
function typesString(answer: string) {
  const pascalName = pascal(answer)
  return `import { DetailedHTMLProps, HTMLAttributes } from 'react'
  import { CSSProp } from 'styled-components'
  import { PartialDeep } from 'type-fest'
  import { ${pascalName}ThemeType } from './${pascalName}.theme'

  export interface ${pascalName}Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    $css?: CSSProp | string
    customTheme?: PartialDeep<${pascalName}ThemeType>
  }
  `
}
function stylesString(answer: string) {
  const pascalName = pascal(answer)
  return `import styled, { CSSProp, css } from 'styled-components'
  import { ${pascalName}ThemeType } from './${pascalName}.theme'
  
  interface ${pascalName}Props {
    $css?: CSSProp | string
    theme: ${pascalName}ThemeType
  }
  const ${pascalName}Style = {
    Wrap: styled.div<${pascalName}Props>(
      ({ theme: { color }, \$css }) => css\`
        \${\$css ?? ''}
      \`
    ),
  }
  export default ${pascalName}Style
  `
}
function themeString(answer: string) {
  const pascalName = pascal(answer)
  return `
import { KuiContext } from '@/KuiProvider/context'
import { DefaultThemes } from '@/themes'
import { merge } from 'lodash-es'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PartialDeep } from 'type-fest'

export function get${pascalName}Style(theme: DefaultThemes) {
  const { colors, fonts } = theme
  return {
    color: {
      textColor: colors.foreground,
    },
    textStyle: {
      default: fonts.default,
    },
  }
}
export type ${pascalName}ThemeType = ReturnType<typeof get${pascalName}Style>

export const get${pascalName}Theme = (
  currentTheme: ${pascalName}ThemeType,
  customTheme?: PartialDeep<${pascalName}ThemeType>
) => {
  const theme = merge(currentTheme, customTheme)
  return theme
}
export const ${pascalName}Provider = ({
  children,
  customTheme,
}: {
  children: React.ReactNode
  customTheme?: PartialDeep<${pascalName}ThemeType>
}) => {
  const globalTheme = React.useContext(KuiContext)
  const default${pascalName}Theme = get${pascalName}Style(globalTheme.theme)
  return (
    <ThemeProvider
      theme={
        customTheme
          ? get${pascalName}Theme(default${pascalName}Theme, customTheme)
          : default${pascalName}Theme
      }
    >
      {children}
    </ThemeProvider>
  )
}
  `
}
rl.question('이름이 무엇입니까? ', async (answer) => {
  const currentPath = process.argv[process.argv.length - 1]
  const directoryName = pascal(answer)
  const pascalName = pascal(answer)
  if (!currentPath) {
    rl.close()
    shell.exit()
  }
  if (answer.trim() === '') {
    rl.close()
    shell.exit()
  }
  if (!fsDefault.existsSync(`${currentPath}/${directoryName}`)) {
    await fs.mkdir(`${currentPath}/${directoryName}`)
  }
  await createComponent(
    stylesString(answer),
    `${currentPath}/${directoryName}/${pascalName}.styled.tsx`
  )
  await createComponent(
    typesString(answer),
    `${currentPath}/${directoryName}/${pascalName}.type.tsx`
  )
  await createComponent(
    themeString(answer),
    `${currentPath}/${directoryName}/${pascalName}.theme.tsx`
  )
  await createComponent(
    componentString(answer),
    `${currentPath}/${directoryName}/${pascalName}.tsx`
  )
  await createComponent(
    indexString(answer),
    `${currentPath}/${directoryName}/index.tsx`
  )

  shell.echo(`${currentPath}/${directoryName}의 위치에 생성했습니다..`)
  shell.exec(`code ${currentPath}/${directoryName}/index.tsx`)
  rl.close()
  shell.exit()
})
