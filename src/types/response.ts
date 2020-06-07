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
export interface Sprites{
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}
export interface Stats{
  base_stats: number,
  effort: number
  stat: NameUrl
}
export interface Types{
  slot: number
  type: NameUrl
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
