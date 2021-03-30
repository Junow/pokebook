import React from 'react'
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

interface State {
  data: ResponseByNameAPI | undefined;
  error: any;
}

export class PokeByUrl extends React.PureComponent<Props, State> {
  state: State = {
    data: undefined,
    error: undefined
  };

  componentDidMount() {
    const { url } = this.props;
    fetcher(url).then((data) => {
      this.setState({data})
    })
  }

  componentDidUpdate() {
    const { url } = this.props;
    fetcher(url).then((data) => {
      this.state.data = data;
    })
  }

  render () {
    const { error, data } = this.state;

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
}

export default PokeByUrl