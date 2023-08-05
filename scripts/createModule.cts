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
  import ${pascalName}Style from './${pascalName}.styled'
  import { ${pascalName}Props } from './${pascalName}.type'
  
  const { Wrap } = ${pascalName}Style
  
  export default function ${pascalName}({ $css, ...props }: ${pascalName}Props) {
    return (
        <Wrap $css={$css} {...props}>
          ${pascalName}
        </Wrap>
    )
  }
  `
}
function typesString(answer: string) {
  const pascalName = pascal(answer)
  return `import { DetailedHTMLProps, HTMLAttributes } from 'react'
  import { CSSProp } from 'styled-components'

  export interface ${pascalName}Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    $css?: CSSProp | string
  }
  `
}
function stylesString(answer: string) {
  const pascalName = pascal(answer)
  return `import styled, { CSSProp, css } from 'styled-components'
  
  interface ${pascalName}Props {
    $css?: CSSProp | string
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
