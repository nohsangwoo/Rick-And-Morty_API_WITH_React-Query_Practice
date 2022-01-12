import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Character from './Character'
import CharacterType from './CharacterType'

const Characters = () => {
  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    return response.json()
  }

  // 첫번째 인자로는 unique key를 넣어준다
  const { isLoading, error, data, isFetching, status } = useQuery(
    'characters',
    fetchCharacters,
  )

  console.log(status, data)
  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Error</div>
  }

  return (
    <div className="characters">
      {data?.results?.map((character: CharacterType, index: number) => {
        return (
          <React.Fragment key={index}>
            <Character character={character} />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Characters
