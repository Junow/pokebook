import React from 'react'
import PokeDetail from 'components/PokeDetail'
import Header from 'components/Header'
import { useRouteMatch } from 'react-router'

const Detail = () => {
  const { params } = useRouteMatch<{name: string}>()
  return (
    <>
      <Header/>
      <PokeDetail name={params.name}/>
    </>
  )
}

export default Detail

