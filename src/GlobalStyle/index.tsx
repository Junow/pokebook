import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    background: #23282E;
    color: #D6D8DA;
    box-sizing: border-box
  }
`

export const fontSize = {
  xxxs: '0.75rem',
  xxs: '1rem',
  xs: '1.25rem',
  s: '1.5rem',
  sm: '1.75rem',
  m: '2rem',
  ml: '2.25rem',
  l: '2.5rem',
  xl: '2.75rem',
  xxl: '3rem',
} as const

export default GlobalStyle
