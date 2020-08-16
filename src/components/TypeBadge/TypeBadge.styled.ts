import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
`

export const Badge = styled.span<{color: string}>`
  background: ${({ color }) => color};
  text-align: center;
  width: 5rem;
  border-radius: 1rem;
  padding: 4px;
  margin-right: .5rem;
`
