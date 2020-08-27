import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  max-width:80%;
  width: 50%;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  min-width: 25rem;
`

export const Img = styled.img`
  width: 10rem;
  margin: auto;
`
export const Detail = styled.ul`
  display: flex;
  flex-direction: column;
`
export const Li = styled.li`
  list-style-type: none;
`

export const Stat = styled.span`
  position: relative;
  flex: 2;
`

export const Overlay = styled.div`
  position: absolute;
  background: #323639;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1rem;
`
export const Bar = styled.div<{color: string, amount: number}>`
  position: absolute;
  width: ${({ amount }) => (amount / 150) * 100}%;
  height: 1rem;
  background: ${({ color }) => color};
  transition: width 0.5s ease-in-out;
`

export const Span = styled.span`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
`

export const H1 = styled.h1`
  padding: 1rem;
  text-align: center;
`
