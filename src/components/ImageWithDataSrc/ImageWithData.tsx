import React, {
  useEffect, useRef,
} from 'react'
import background from 'assets/background.png'

interface Props{
  src: string
}
const ImageWithDataSrc: React.FC<Props> = ({ src }) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const onLoad = (_src: string) => {
    if (!imgRef || !imgRef.current) return
    imgRef.current.src = _src
    imgRef.current.removeAttribute('data-src')
    setTimeout(() => {
      if (!imgRef || !imgRef.current) return
      imgRef.current.style.opacity = '1'
    }, 500)
  }

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => { onLoad(src) }
  }, [src])
  return (
    <>
    <img
      ref={imgRef}
      style={{
        width: 'fit-content',
        margin: 'auto',
        transition: 'opacity 0.3s',
        opacity: 0,
      }}
      data-src={src}
      src={background}
    />
    </>
  )
}

export default ImageWithDataSrc
