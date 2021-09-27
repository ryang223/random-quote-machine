import React, { useState } from 'react';
import  { useEffect } from 'react';
import './App.scss';


let quoteDBUrl = "https://raw.githubusercontent.com/ryang223/random-quote-machine/main/quotes.json"


function App() {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState
  (null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  }
    useEffect(() => {
        fetchQuotes(quoteDBUrl)
    }, [quoteDBUrl])
 

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={() => getRandomQuote()}> Generate A Random Quote</button>
        <p>
          {quote}
        </p>
        <p> - {author}</p>
      </header>
    </div>
  );
}

export default App;
