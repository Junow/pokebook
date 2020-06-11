import React, { useState } from 'react'
import useSwr from 'swr'
import { ResponseByNameAPI } from 'types/response'
import { fetcher } from 'utils/request'
import { Span } from 'components/Simple'
import Loading from 'components/Loading'
import spinner from 'assets/loading.gif'
import * as S from './styles'

interface Props{
  url: string
}
const PokeByUrl: React.FC<Props> = ({ url }) => {
  const {
    data, error,
  } = useSwr<ResponseByNameAPI>(url, fetcher)
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true)

  if (error) {
    return <div>error...</div>
  }

  if (!data) {
    return <Loading/>
  }
  return (
    <S.Conatiner>
      <div><Span size='xxxs'>No.</Span> {data.id}</div>
      {
        isImageLoading && <img src={spinner}/>
      }
      <S.Img
        src={data.sprites.front_default}
        onLoad={() => setIsImageLoading(false)}
        isImageLoading={isImageLoading}
      />
      <div>name: {data.name}</div>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>abilities: {data.abilities.map((v) => v.ability.name).join(', ')}</div>
    </S.Conatiner>
  )
}

export default PokeByUrl
