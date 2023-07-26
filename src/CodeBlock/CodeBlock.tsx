'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CodeBlockStyle } from './CodeBlock.styled'
import { CodeBlockProps } from './CodeBlock.type'
import { copyToClipboard } from './helpers/clipboard'
import { Copy, CopyCheck, Ts } from './icons'

const { Wrap, Title, FileName, Clipboard } = CodeBlockStyle
export const CodeBlock = ({
  $css,
  children,
  title,
  ...props
}: CodeBlockProps) => {
  const [copyStatus, set_copyStatus] = useState<boolean>(false)
  const timeoutRef = useRef<NodeJS.Timeout>()
  useEffect(() => {
    if (copyStatus) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        set_copyStatus(false)
      }, 2000)
    }
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [copyStatus])
  return (
    <Wrap $css={$css} {...props}>
      <Title>
        <FileName>
          <Ts />
          {title}
        </FileName>
        <div>
          {copyStatus ? (
            <Clipboard className="copy-check-icon">
              <CopyCheck />
              <span>Copied !</span>
            </Clipboard>
          ) : (
            <Clipboard
              className="copy-icon"
              onClick={async () => {
                try {
                  const copied = await copyToClipboard(children?.trim() ?? '')
                  console.log('copied', copied)
                  if (copied === 'error') return
                  set_copyStatus(true)
                } catch (error) {}
              }}
            >
              <Copy />
              <span>Copy</span>
            </Clipboard>
          )}
        </div>
      </Title>
      <SyntaxHighlighter
        showLineNumbers
        lineNumberStyle={{
          borderRight: '1px solid #515151',
          marginRight: '24px',
          paddingLeft: '12px',
        }}
        language={'tsx'}
        style={okaidia}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 12px 12px',
        }}
      >
        {children?.trim() ?? ''}
      </SyntaxHighlighter>
    </Wrap>
  )
}
