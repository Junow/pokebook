interface NameUrl {
  name: string
  url: string
}
export interface Ability {
  ability: NameUrl,
  is_hidden: boolean
  slot: number
}
export interface Forms {
  name: string
  url: string
}
export interface GameIndices {
  game_index: number,
  version: NameUrl
}
export interface HeldItems{
  item: NameUrl,
  version_details: {
    rarity: number
    version: NameUrl
  }[]
}
export interface Moves {
  move: NameUrl,
  version_group_details: {
    level_learned_at: number,
    move_learn_method: NameUrl,
    version_group: NameUrl
  }[],
}
export interface Species{
  name: string
  url: string
}

export type SpritesKeys = 'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female' | 'front_default' | 'front_female' | 'front_shiny' | 'front_shiny_female'

export type Sprites = {[key: string]: string | null}

export interface Stats{
  base_stat: number,
  effort: number
  stat: NameUrl
}
export interface Types{
  slot: number
  type: {
    name: 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unkwnon' | 'shadow'
    url: string
  }
}
export interface ResponseByNameAPI {
  abilities: Ability[]
  base_experience: number
  forms: Forms[]
  game_indices: GameIndices[]
  height: number,
  held_items: HeldItems[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Moves[]
  name: string
  order: number
  species: Species
  sprites: Sprites
  stats: Stats[]
  types: Types[]
  weight: number
}

export interface ResponseDefaultAPI {
  count: number
  next: string | null
  previous: string | null
  results: NameUrl[]
}
