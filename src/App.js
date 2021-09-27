import React, { useState } from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
    
  }

  const quotesArray= [

    {quote:"Do nothing which is of no use",author:"Miyamoto Musashi"},
    {
           quote:"Study strategy over the years and achieve the spirit of the warrior. Today is victory over yourself of yesterday; tomorrow is your victory over lesser men.",author:"Miyamoto Musashi"},
    {
           quote:"Perceive that which cannot be seen with the eye.",author:"Miyamoto Musashi"},
    {
           quote:"Perception is strong and sight weak. In strategy it is important to see distant things as if they were close and to take a distanced view of close things.",author:"Miyamoto Musashi"},
        {
         quote: "Engage in combat fully determined to die and you will be alive; wish to survive in the battle and you will surely meet death.", author:"Uesugi Kenshin"},
        {
        quote:" A samurai should always be prepared for death – whether his own or someone else’s.",author:"Stan Sakai"},
        {
        quote:"Sword and mind must be united.",author:"Yamada Jirokichi"}
  ]



  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={() => generateRandomNumber()}> Generate A Random Quote</button>
        <p>
          {quote}
        </p>
        <p> - {author}</p>
      </header>
    </div>
  );
}

export default App;
