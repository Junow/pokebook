import React, {
  useEffect, useState,
} from 'react'
import useSWR from 'swr'
import {
  fetcher, URL,
} from 'utils/request'
import { ResponseByNameAPI } from 'types/response'
import PokeCard from 'components/PokeCard'
import Feed from 'components/Feed'
import * as S from './styles'

interface Props{
  name: string
}
const Content: React.FC<Props> = ({ name }) => {
  const {
    data, error,
  } = useSWR<ResponseByNameAPI>(URL.getPokeByName(name), fetcher)

  if (error) {
    return <div>error...</div>
  }
  if (!data) {
    return <div>loading...</div>
  }
  return (
    <S.Container>
      {
        name ? (
          <PokeCard name={name}/>
        ) : (
          <Feed/>
        )
      }
    </S.Container>
  )
}

export default Content

