import { useEffect, useState } from "react";
import './Home.css'
import Character from './Character'
function Home() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacters();
    }, []);
    const getCharacters = async () => {
        const response = await fetch(
            "https://www.breakingbadapi.com/api/characters?limit=10&offset=20"
        );
        const data = await response.json();
        setCharacters(data);
    };

    return (
        <div className="App">
            {characters.map((character) => (
                <Character character={character} />
            ))}
        </div>
    );
}

export default Home