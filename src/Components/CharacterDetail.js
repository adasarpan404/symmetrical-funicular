import React, { useEffect, useState } from 'react'
import Quotes from './Quotes';

const CharacterDetail = ({ match }) => {
    const [characterDetail, setCharacterDetail] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getCharacterDetail();
    }, []);

    const getCharacterDetail = async () => {
        const response = await fetch(
            `https://www.breakingbadapi.com/api/characters/${match.params.characterId}`
        )
        const data = await response.json();
        setCharacterDetail(data[0])
        console.log(data[0])
        setLoading(false);
    }
    if (loading) {
        return (

            <h1>Loading...</h1>

        )
    }


    return (
        <div>
            <h1>{characterDetail.name}</h1>

            {characterDetail.birthday !== "Unknown" && <h2>{characterDetail.birthday}</h2>}
            {characterDetail.occupation.map((occ) => (
                <h2 key={occ}>{occ}</h2>
            ))}
            <h2>{characterDetail.status}</h2>
            <h2>{characterDetail.portrayed}</h2>
            <h2>{characterDetail.nickname}</h2>
            {
                characterDetail.appearance.map((appear) => (
                    <h3 key={appear} >season {appear}</h3>
                ))
            }
            <Quotes characterDetail={characterDetail} />
        </div>
    )
}

export default CharacterDetail
