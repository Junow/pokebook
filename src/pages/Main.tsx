import React, { useState } from 'react'
import Header from 'components/Header'
import Content from 'components/Content'
import Input from 'components/SearchBar'
import Feed from 'components/Feed'

const Main = () => {
  const [name, setName] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void | undefined => {
    setName(e.target.value)
  }
  return (

    <>
    <Header/>
    <Input value={name} onChange={handleChange}/>
    <Feed/>
    </>
  )
}

export default Main
