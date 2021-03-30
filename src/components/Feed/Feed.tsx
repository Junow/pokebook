import React, { useState } from 'react'
import { fetcher } from 'utils/request'
import { ResponseDefaultAPI } from 'types/response'
import PokeByUrl from 'components/PokeByUrl'
import LoaderSpinner from 'components/common/LoaderSpinner'
import { useHistory } from 'react-router'
import * as S from './Feed.styled'

const pokemonList: ResponseDefaultAPI['results'] = [];

async function loadAllData(url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0') {
    const data: ResponseDefaultAPI = await fetcher(url);
    if (data.results) {
        pokemonList.push(...data.results)
    }
    if (data.next) {
        await loadAllData(data.next);
    }
}

const Feed: React.FC = () => {
    const ITEMS_PER_PAGE = 20
    const [search, setSearch] = useState<string>('')
    const [filteredList, setFilteredList] = useState<ResponseDefaultAPI['results']>([])
    const [pageIndex, setPageIndex] = useState<number>(0)
    const history = useHistory()
    const indexInit = pageIndex*ITEMS_PER_PAGE;
    const indexEnd = indexInit + ITEMS_PER_PAGE

    React.useEffect(() => {
        loadAllData().then(() => {
            setFilteredList([...pokemonList]);
        })
    }, [])

    React.useEffect(() => {
        if (!search) {
            setFilteredList([...pokemonList]);
            return;
        }
        const items = [...pokemonList];
        const reg = new RegExp(search)
        for (var i = 0; i<=items.length; i+=1) {
            if (!reg.test(items[i]?.name)) {
                // remove items that don't match search
                items.splice(i, 1)
            }
        }
        setFilteredList(items)
    }, [search])

    const handlePrevClick = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    }

    const handleNextClick = () => {
        const maxPages = Math.round(filteredList.length / ITEMS_PER_PAGE)
        if (pageIndex < maxPages) {
            setPageIndex(pageIndex + 1);
        }
    }

    if (!filteredList.length) {
        return <LoaderSpinner />
    }

    return (
        <S.Container>
            <input type="text" placeholder="search" onKeyUp={(e) => setSearch((e.target as HTMLInputElement).value)} />
            <S.Content>
                {
                    filteredList.slice(indexInit, indexEnd).map(({
                        name, url,
                    }) => (
                        <div key={name} onClick={() => history.push(`/${name}`)}>
                            <PokeByUrl url={url} />
                        </div>
                    ))
                }
            </S.Content>
            <S.ButtonWrapper>
                <S.Button onClick={handlePrevClick}>prev</S.Button>
                <S.Button onClick={handleNextClick}>next</S.Button>
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default Feed
