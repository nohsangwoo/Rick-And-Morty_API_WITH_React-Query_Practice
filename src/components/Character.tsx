import React from 'react'

interface Props {
  children: React.ReactNode
  character: any
}
const Character = ({ character }: Props) => {
  return (
    <div className="card">
      <img src={character.image} alt="" />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">{character.status}</p>
      </div>
    </div>
  )
}

export default Character
