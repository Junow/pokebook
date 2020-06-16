import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  justify-items: center;
`

export const ButtonWrapper = styled.div`
  margin:auto;
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem;
  outline: none;
`
