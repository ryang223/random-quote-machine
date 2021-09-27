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
        <div id = "quote-box">
        <h1>Random Number: {randomNumber}</h1>
        <p id="text">
          {quote}
        </p>
        <p id="author">
           - {author}
           </p>
           <button id="new-quote" onClick={() => getRandomQuote()}> Generate A Random Quote
           </button>
           <a id="tweet-quote" href=
           {encodeURI(`https://twitter.com/intent/tweet?text=${quote} -${author}`)}>Tweet Quote</a>
        </div>
      </header>
    </div>
  );
}

export default App;
