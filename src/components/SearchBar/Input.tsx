import React from 'react'
import styled from 'styled-components'
import { Span } from 'components/Simple'

const S = {
  Container: styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: flex-end;
    align-items: center;
    white-space: break-spaces;
  `,
  Input: styled.input`
    outline: none;
    height: 2rem;
    width: 20%;
  `,
}

interface Props {
  value: string,
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}
const SearchBar: React.FC<Props> = ({
  value,
  onChange,
}) => (
  <S.Container>
    <Span size='xxs'>검색 </Span>
    <S.Input value={value} onChange={onChange}/>
  </S.Container>
)

export default SearchBar

