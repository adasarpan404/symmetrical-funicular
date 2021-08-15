import React, { useEffect, useState } from 'react'

function Quotes({ characterDetail }) {
    const [quotes, setQuotes] = useState([]);
    console.log(characterDetail.name)

    useEffect(() => {
        getQuotes();
    }, [])

    const getQuotes = async () => {
        const Name1 = characterDetail.name.split(' ')[0];
        const Name2 = characterDetail.name.split(' ')[1];
        const response = await fetch(`https://www.breakingbadapi.com/api/quote?author=${Name1}+${Name2}`);
        const data = await response.json();
        setQuotes(data);
    }
    console.log(quotes)
    return (
        <div>
            {quotes.map((quote) => (
                <h4>{quote.quote}</h4>
            ))}
        </div>
    )
}

export default Quotes
