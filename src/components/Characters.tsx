import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Character from './Character'
import CharacterType from './CharacterType'
import RicAndMortyApiResType from './RicAndMortyApiResType'
import Axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Helmet } from 'react-helmet-async'
const Characters = () => {
  const [page, setPage] = useState<number>(1)

  const fetchCharacters = async (props: any) => {
    const config: AxiosRequestConfig<any> = {
      url: 'https://rickandmortyapi.com/api/character',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // ...(accessToken && { Authorization: 'Bearer ' + accessToken }), //the token is a variable which holds the token
      },
      params: {
        page: props.queryKey[1],
      },
    }

    const response: AxiosResponse<any, any> = await Axios(config)
    console.log('response: ', response)

    return response.data
  }

  // 첫번째 인자로가 queryKey
  // 두번째 인자는 실행되는 함수
  const {
    isLoading,
    isError,
    // error,
    data,
    // isFetching,
    // status,
    // isPreviousData,
  } = useQuery<RicAndMortyApiResType>(['characters', page], fetchCharacters)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  console.log('data: ', data)

  return (
    <div className="characters">
      <Helmet>
        <title>Rick And Morty Characters</title>
      </Helmet>
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
        <button
          disabled={!Boolean(data?.info?.next)}
          onClick={() => setPage(prev => prev + 1)}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Characters
