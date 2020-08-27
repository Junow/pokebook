import React from 'react'
import Icon from 'components/Icon'
import styled from 'styled-components'

const S = { Container: styled.div`
    display: flex;
    background: none;
    justify-content: center;
    align-items: center;
    animation: spin infinite 1s ease-in-out;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }` }

const LoaderSpinner = () => (
  <S.Container>
    <Icon icon='Spinner'/>
  </S.Container>
)

export default LoaderSpinner
