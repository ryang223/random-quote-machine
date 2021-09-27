import React, { useState } from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("Perceive that which cannot be seen with the eye.")
  const [author, setAuthor] = useState("Miyamoto Musashi")

  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(3 * Math.random())
    setRandomNumber(randomInteger)
    if (randomInteger === 0) {
      setQuote(quotesArray[0])
    }
    if (randomInteger === 1) {
      setQuote(quotesArray[1])
      }
    if (randomInteger === 2) {
      setQuote(quotesArray[2])
    }
  }

  const quotesArray= [

    "Do nothing which is of no use",

    "Study strategy over the years and achieve the spirit of the warrior. Today is victory over yourself of yesterday; tomorrow is your victory over lesser men.",

    "Perceive that which cannot be seen with the eye.",

    "Perception is strong and sight weak. In strategy it is important to see distant things as if they were close and to take a distanced view of close things.",

    "Engage in combat fully determined to die and you will be alive; wish to survive in the battle and you will surely meet death.",

    "A samurai should always be prepared for death – whether his own or someone else’s.",

    "Sword and mind must be united."
  ]



  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={() => generateRandomNumber()}> Generate A Random Number</button>
        <p>
          "{quote}"
        </p>
        <p> - {author}</p>
      </header>
    </div>
  );
}

export default App;
