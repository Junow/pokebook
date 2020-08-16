import React, {
  useEffect, useRef, useState,
} from 'react'
import * as S from './Slider.styled'

interface Props{
  imgUrls: string[];
}

const Slider: React.FC<Props> = ({ imgUrls }) => {
  const conveyRef = useRef<HTMLDivElement>(null)
  const [imgNum, setImgNum] = useState(0)

  const handlePrevClick = () => {
    if (imgNum === 0) return
    setImgNum(imgNum - 1)
  }

  const handleNextClick = () => {
    if (imgNum === imgUrls.length - 1) return
    setImgNum(imgNum + 1)
  }

  useEffect(() => {
    if (!conveyRef) return
    if (!conveyRef.current) return
    conveyRef.current.style.transform = `translateX(${-100 * imgNum}%)`
  }, [imgNum])

  return (
    <S.Container>
      <S.ImgWrapper>
        <S.Convey ref={conveyRef}>
          {
            imgUrls.map((v) => (
              <div key={v}>
                <S.Img src={v}/>
              </div>
            ))
          }
        </S.Convey>
      </S.ImgWrapper>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}>
        <S.Prev onClick={handlePrevClick}>prev</S.Prev>
        <S.Next onClick={handleNextClick}>next</S.Next>
      </div>
    </S.Container>
  )
}

export default Slider

