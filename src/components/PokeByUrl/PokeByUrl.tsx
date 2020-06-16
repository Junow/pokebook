import React from 'react'
import useSwr from 'swr'
import { ResponseByNameAPI } from 'types/response'
import { fetcher } from 'utils/request'
import { Span } from 'components/Simple'
import Loading from 'components/Loading'
import ImageWithGIF from 'components/ImageWithGIF'
import ImageWithDataSrc from 'components/ImageWithDataSrc'
import LazyImage from 'components/LazyImage'
import * as S from './styles'

interface Props{
  url: string
}
const PokeByUrl: React.FC<Props> = ({ url }) => {
  const {
    data, error,
  } = useSwr<ResponseByNameAPI>(url, fetcher)

  if (error) {
    return <div>error...</div>
  }

  if (!data) {
    return <Loading/>
  }
  return (
    <S.Conatiner>
      <div><Span size='xxxs'>No.</Span> {data.id}</div>
      {/* <ImageWithGIF
        src={data.sprites.front_default}
      /> */}
      {/* <ImageWithDataSrc
        src={data.sprites.front_default}
      /> */}
      <LazyImage src={data.sprites.front_default}/>
      <div>name: {data.name}</div>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>abilities: {data.abilities.map((v) => v.ability.name).join(', ')}</div>
    </S.Conatiner>
  )
}

export default PokeByUrl
