import styled from 'styled-components'

export const Conatiner = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  padding: 1rem;
  background: #31363F;
  margin: 0.5rem;
  *{
    background: #31363F;
  }
  
  &:hover{
    transition: all 0.3s;
    transform: scale(1.1);
  }
`

export const Img = styled.img`
  width: fit-content;
  margin: auto;
`

