import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display:  flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
`

export const Prev = styled.button`
  height: fit-content;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const Next = styled.button`
  height: fit-content;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const ImgWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 50%;
  margin: auto;
`

export const Img = styled.img`
  margin: auto;
  width: 100%;
`

export const Convey = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
`
