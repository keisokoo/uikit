import styled, { CSSProp, css } from 'styled-components'

export const CodeBlockStyle = {
  Wrap: styled.div<{ $css?: CSSProp | string }>`
    ${({ $css }) => css`
      background: rgb(39, 40, 34);
      overflow: hidden;
      pre {
        border: 1px solid #5a5a5a;
        border-radius: 0 0 12px 12px;
      }
      ${$css ?? ''}
    `};
  `,
  Title: styled.div`
    font-size: 14px;
    color: #9d9d9d;
    border: 1px solid #5a5a5a;
    border-bottom: 0px;
    padding: 16px 24px;
    border-radius: 12px 12px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .copy-icon {
      cursor: pointer;
      &:hover {
        path {
          fill: #fff;
        }
        color: #fff;
      }
      &:active {
        path {
          fill: #00c331;
        }
      }
    }
    .copy-check-icon {
      cursor: default;
      user-select: none;
    }
  `,
  FileName: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  Clipboard: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
}
