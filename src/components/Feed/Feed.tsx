import React, {
  useEffect, useState,
} from 'react'
import useSWR from 'swr'
import {
  fetcher, URL,
} from 'utils/request'
import { ResponseDefaultAPI } from 'types/response'
import PokeByUrl from 'components/PokeByUrl'
import Loading from 'components/Loading'
import * as S from './styles'

const Feed: React.FC = () => {
  const [apiURL, setApiURL] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  const {
    data, error,
  } = useSWR<ResponseDefaultAPI>(apiURL, fetcher)

  const handlePrevClick = () => {
    if (data?.previous) {
      setApiURL(data.previous)
    }
  }

  const handleNextClick = () => {
    if (data?.next) {
      setApiURL(data.next)
    }
  }

  if (error) {
    return <div>error...</div>
  }
  if (!data) {
    return <Loading/>
  }

  return (
    <S.Container>
      <S.Content>
      {
        data.results.map(({
          name, url,
        }) => (
          <PokeByUrl key={name} url={url}/>
        ))
        }
      </S.Content>
      <S.ButtonWrapper>
        <S.Button onClick={handlePrevClick}>prev</S.Button>
        <S.Button onClick={handleNextClick}>next</S.Button>
      </S.ButtonWrapper>

    </S.Container>
  )
}

export default Feed
