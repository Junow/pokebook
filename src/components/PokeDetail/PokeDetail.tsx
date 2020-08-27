/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import useSwr from 'swr'
import LoaderSpinner from 'components/common/LoaderSpinner'
import { fetcher } from 'utils/request'
import { ResponseByNameAPI } from 'types/response'
import LazyImage from 'components/LazyImage'
import { capitalize } from 'utils/common'
import TypeBadge from 'components/TypeBadge'
import * as S from './PokeDetail.styled'

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
    return <LoaderSpinner/>
  }

  const types = data.types.map((v) => v.type.name).join(', ') || 'none'

  return (
    <S.Container>
      <S.H1>#{data.id} {capitalize(data.name)}</S.H1>
      <div style={{
        display: 'flex', width: '100%',
      }}>
        {
          data.types.map((type) => <TypeBadge key={type.type.name} type={type.type.name}/>)
        }
      </div>
      {
        data.sprites.back_default && <LazyImage src={data.sprites.back_default} style={{ width: '10rem' }}/>
      }
      <S.Detail>
        <S.Li>types: {types}</S.Li>
        <S.Li>height: {(data.height * 10) / 100} m</S.Li>
        <S.Li>weight: {data.weight / 10} kg</S.Li>
        {
          data.stats.map((stat) => (
              <S.Li key={stat.stat.name}>
                <S.Row>
                  <S.Span>
                    <strong>{stat.stat.name}</strong>
                    </S.Span>
                  <S.Stat>
                    <S.Overlay/>
                    <S.Bar color={'#CD5241'} amount={stat.base_stat}/>
                  </S.Stat>
                </S.Row>
              </S.Li>

          ))
        }
      </S.Detail>
    </S.Container>
  )
}

export default PokeDetil
