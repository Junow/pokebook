import styled from 'styled-components'

export const Conatiner = styled.div`
  display: flex;
  width: 15rem;
  flex-direction: column;
  padding: 1rem;
  background: #31363F;
  margin: 0.5rem;
  flex-grow: 1;
  *{
    background: #31363F;
  }
  
  transition: all 0.5s;

  &:hover{
    transition: all 0.5s;
    transform: scale(1.05);
    cursor: pointer;
  }
`

interface ImgProp {
  isImageLoading: boolean
}
export const Img = styled.img<ImgProp>`
  width: fit-content;
  margin: auto;
  display: ${({ isImageLoading }) => (isImageLoading ? 'none' : 'block')}
`

