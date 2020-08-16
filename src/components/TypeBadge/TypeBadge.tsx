import React from 'react'
import { typeColorMap } from 'utils/common'
import * as S from './TypeBadge.styled'

interface Props {
  type: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unkwnon' | 'shadow'
}

const TypeBadge: React.FC<Props> = ({ type }) => (
  <S.Badge color={typeColorMap[type]}>{type}</S.Badge>
)

export default TypeBadge
