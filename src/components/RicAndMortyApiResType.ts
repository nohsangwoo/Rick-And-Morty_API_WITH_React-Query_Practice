import CharacterType from './CharacterType'
type RicAndMortyApiResType = {
  info: { count: number; next?: Boolean; pages: number; prev: string }
  results: CharacterType[]
}

export default RicAndMortyApiResType
