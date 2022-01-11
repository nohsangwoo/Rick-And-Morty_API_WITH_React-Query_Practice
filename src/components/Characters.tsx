import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

const Character = () => {
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
    <div>
      {data?.results?.map((character: any, index: number) => {
        return <div key={index}>{character.name}</div>
      })}
    </div>
  )
}

export default Character
