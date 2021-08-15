import React from 'react'
import { Link } from 'react-router-dom'

export default function Character({ character }) {
    return (
        <div>
            <Link to={`character/${character.char_id}`} >
                <h1>{character.name}</h1>
                <img src={character.img} width="100px" height="100px" alt={character.name} />
                <p>{character.occupation}</p>
            </Link>
        </div>

    )
}
