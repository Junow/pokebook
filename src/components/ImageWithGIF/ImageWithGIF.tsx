import React, { useState } from 'react'
import styled from 'styled-components'
import spinner from 'assets/loading.gif'

interface ImgProp{
  isImageLoading: boolean
}

interface Props{
  src: string
}

const S = { Img: styled.img<ImgProp>`
    width: fit-content;
    margin: auto;
    display: ${({ isImageLoading }) => (isImageLoading ? 'none' : 'block')};
  ` }

const ImageWithGIF: React.FC<Props> = ({ src }) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)

  return (
    <>
    {
      isImageLoading && <img src={spinner}/>
    }
    <S.Img
        src={src}
        onLoad={() => setIsImageLoading(false)}
        isImageLoading={isImageLoading}
    />
    </>
  )
}

export default ImageWithGIF
