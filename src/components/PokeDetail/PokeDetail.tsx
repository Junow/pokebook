import React from 'react'
import * as S from './styles'

interface Props{
  name: string
}
const PokeDetil: React.FC<Props> = ({ name }) => (
    <S.Container>
    {name}
  </S.Container>
)
export default PokeDetil

