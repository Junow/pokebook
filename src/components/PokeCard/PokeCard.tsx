import React from 'react'
import useSWR from 'swr'
import {
  fetcher, URL,
} from 'utils/request'
import { ResponseByNameAPI } from 'types/response'

interface Props {
  name: string
}

const PokeCard: React.FC<Props> = ({ name }) => {
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
    <div>
      <h1>{data.name}</h1>
      <h3>{data.id}</h3>
      <img src={data.sprites.back_default}/>
    </div>
  )
}

export default PokeCard
