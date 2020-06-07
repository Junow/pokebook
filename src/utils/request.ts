
export const fetcher = (url: string) => fetch(url).then((r) => r.json())

const getPokeByName = (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`
const allSearch = () => 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
export const URL = {
  getPokeByName, allSearch,
}
