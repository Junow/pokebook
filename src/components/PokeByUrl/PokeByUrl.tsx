import React from 'react'
import useSwr from 'swr'
import { ResponseByNameAPI } from 'types/response'
import { fetcher } from 'utils/request'
import { Span } from 'components/Simple'
import LoaderSpinner from 'components/common/LoaderSpinner'
import LazyImage from 'components/LazyImage'
import Slider from 'components/Slider'
import * as S from './PokeByUrl.styled'

interface Props{
  url: string
}
const PokeByUrl: React.FC<Props> = ({ url }) => {
  const {
    data, error,
  } = useSwr<ResponseByNameAPI>(url, fetcher)

  const [imgUrls, setImgUrls] = React.useState<string[]>([])

  React.useEffect(() => {
    if (data) {
      const { sprites } = data
      const spriteArr: string[] = []
      Object.keys(sprites).forEach((key) => {
        const value = sprites[key]
        if (value === null) return
        if (value === undefined) return
        spriteArr.push(value as string)
      })
      setImgUrls(spriteArr)
    }
  }, [data])

  if (error) {
    return <div>error...</div>
  }

  if (!data) {
    return <LoaderSpinner/>
  }

  return (
    <S.Conatiner>
      <div><Span size='xxxs'>No.</Span> {data.id}</div>
      <LazyImage src={data.sprites.front_default} />
      <div>name: {data.name}</div>
      <div>height: {data.height}</div>
      <div>weight: {data.weight}</div>
      <div>abilities: {data.abilities.map((v) => v.ability.name).join(', ')}</div>
    </S.Conatiner>
  )
}

export default PokeByUrl
