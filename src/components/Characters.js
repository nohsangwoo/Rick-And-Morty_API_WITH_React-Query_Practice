import React, { useState, useEffect } from 'react'

const Character = () => {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json()
    console.log(data)
    setCharacters(data)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div>
      {characters?.results?.map((character, index) => {
        return <div key={index}>{character.name}</div>
      })}
    </div>
  )
}

export default Character
