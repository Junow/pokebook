import React from 'react'
import useSWR from 'swr'
import {
  fetcher, URL,
} from 'utils/request'
import { ResponseDefaultAPI } from 'types/response'
import PokeByUrl from 'components/PokeByUrl'
import * as S from './styles'

const Feed: React.FC = () => {
  const {
    data, error,
  } = useSWR<ResponseDefaultAPI>(URL.allSearch(), fetcher)

  if (error) {
    return <div>error...</div>
  }
  if (!data) {
    return <div>loading...</div>
  }

  return (
    <S.Container>
      {
        data.results.map(({
          name, url,
        }) => (
            <PokeByUrl key={name} url={url}/>
        ))
      }
    </S.Container>
  )
}

export default Feed
