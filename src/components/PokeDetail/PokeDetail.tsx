/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import useSwr from 'swr'
import Loading from 'components/Loading'
import { fetcher } from 'utils/request'
import { ResponseByNameAPI } from 'types/response'
import * as S from './styles'

interface Props{
  name: string
}

const PokeDetil: React.FC<Props> = ({ name }) => {
  const {
    data, error,
  } = useSwr<ResponseByNameAPI>(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher)

  React.useEffect(() => {
    console.log(data)
  }, [data])

  if (error) {
    return <div>error</div>
  }
  if (!data) {
    return <Loading/>
  }

  const types = data.types.map((v) => v.type.name).join(', ') || 'none'
  const ability = data.abilities.map((v) => v.ability.name).join(', ') || 'none'
  const forms = data.forms.map((v) => v.name).join(', ') || 'none'
  const gameVersions = data.game_indices.map((v) => v.version.name).join(', ') || 'none'
  const items = data.held_items.map((v) => v.item.name).join(', ') || 'none'
  const baseStats = data.stats.map((v) => v.base_stat).join(', ') || 'none'
  const efforts = data.stats.map((v) => `${v.effort}`).join(', ') || 'none'
  const stats = data.stats.map((v) => v.stat.name).join(', ') || 'none'

  return (
    <S.Container>
      {
        data.sprites.back_default && <S.Img alt='pokemon' src={data.sprites.back_default}/>
      }
      <S.Detail>
        <figcaption>id: {data.id}</figcaption>
        <figcaption>name: {data.name}</figcaption>
        <figcaption>species: {data.species.name}</figcaption>
        <figcaption>types: {types}</figcaption>
        <figcaption>height: {data.height}</figcaption>
        <figcaption>weight: {data.weight}</figcaption>
        <figcaption>base experience: {data.base_experience}</figcaption>
        <figcaption>order: {data.order}</figcaption>
        <figcaption>ability: {ability}</figcaption>
        <figcaption>forms: {forms}</figcaption>
        <figcaption>game versions: {gameVersions}</figcaption>
        <figcaption>items: {items}</figcaption>
        <figcaption>location: {data.location_area_encounters}</figcaption>
        <figcaption>base stats: {baseStats}</figcaption>
        <figcaption>efforts: {efforts}</figcaption>
        <figcaption>stats: {stats}</figcaption>
      </S.Detail>
    </S.Container>
  )
}

export default PokeDetil
