import React, { useEffect } from 'react'
import useSwr from 'swr'
import { ResponseByNameAPI } from 'types/response'
import { fetcher } from 'utils/request'
import { Span } from 'components/Simple'
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
    return <div>loading...</div>
  }
  return (
    <S.Conatiner>
      <div><Span size='xxxs'>No.</Span> {data.id}</div>
      <div>name: {data.name}</div>
      <div>species: {data.species.name}</div>
      <S.Img src={data.sprites.front_default}/>
    </S.Conatiner>
  )
}

export default PokeByUrl
