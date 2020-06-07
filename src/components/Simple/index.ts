import styled from 'styled-components'
import { fontSize } from 'GlobalStyle'

interface SpanProp {
  size: 'xxxs' | 'xxs' | 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' | 'xxl'
}
export const Span = styled.span<SpanProp>`
  font-size: ${({ size }) => fontSize[size]}
`
