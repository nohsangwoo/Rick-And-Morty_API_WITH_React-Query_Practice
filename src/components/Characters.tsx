import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import Character from './Character'
import CharacterType from './CharacterType'

const Characters = () => {
  const [page, setPage] = useState<number>(1)

  const fetchCharacters = async (props: any) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${props.queryKey[1]}`,
    )
    return response.json()
  }

  // 첫번째 인자로가 queryKey
  // 두번째 인자는 실행되는 함수
  const { isLoading, error, data, isFetching, status } = useQuery(
    ['characters', page],
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
      <div>
        <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>
          Previous
        </button>
        <button onClick={() => setPage(prev => prev + 1)}>next</button>
      </div>
    </div>
  )
}

export default Characters
