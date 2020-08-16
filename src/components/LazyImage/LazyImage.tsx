import React, {
  useEffect, useRef,
} from 'react'
import background from 'assets/background.png'

interface Props {
  src: string | null
  style?: React.CSSProperties
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function throttle(delay: number, event: any) {
  // eslint-disable-next-line no-underscore-dangle
  let _throttle: number | null = null
  return () => {
    if (!_throttle) {
      _throttle = setTimeout(() => {
        event()
        _throttle = null
      }, delay)
    }
  }
}
const LazyImage: React.FC<Props> = ({
  src, style,
}) => {
  const imgRef = useRef <HTMLImageElement>(null)
  const scrollHandler = () => {
    if (!imgRef || !imgRef.current) return

    const el = imgRef.current
    if (imgRef.current.src !== background) return
    if (el.getBoundingClientRect().top <= window.innerHeight
      && el.getBoundingClientRect().bottom >= 0) {
      const srcOrigin = imgRef.current.getAttribute('data-src')
      if (srcOrigin) {
        imgRef.current.src = srcOrigin
        setTimeout(() => {
          if (!imgRef || !imgRef.current) return
          imgRef.current.style.opacity = '1'
        }, 250)
      }
    }
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', throttle(200, scrollHandler))

    return () => {
      window.removeEventListener('scroll', throttle(200, scrollHandler))
    }
  }, [])

  return (
    <img
      ref={imgRef}
      data-src={src}
      src={background}
      alt="pokemon"
      style={{
        width: 'fit-content',
        margin: 'auto',
        transition: 'opacity 0.3s',
        opacity: 0,
        ...style,
      }}
    />
  )
}

export default LazyImage
