import { useState } from 'react'
import './App.css'
import quotes from "./assets/quotes.json"
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

interface Quote {
  quote: String;
  author: String;

}
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};


function getRandomColor(): string {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor]= useState<string>(getRandomColor());


  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return <div className='background' style={{backgroundColor: randomColor, transition}}>
    <div id="quote-box" >
      <div className='quote-content'>
      <h2 id="text">
        <FaQuoteLeft size="30" style={{marginRight: "10px"}} />
        {quote.quote}
        <FaQuoteRight size="30" style={{marginLeft: "10px"}} />
        </h2>
        <h4>{quote.author}</h4>
      </div>
      <div className='buttons'>
        <a
        href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}"}
        id="tweet-quote"
        style={{
          backgroundColor: randomColor,
          marginRight: "10px",
          transition,
        }}
        >
          <FaTwitter color="white"></FaTwitter>
        </a>
        <button id="new-quote" 
        onClick={changeQuote} 
        style = {{ backgroundColor: randomColor, transition }}>
          Nueva Frase
          </button><h6>By Maximiliano DOnofrio</h6>
        </div>
        </div>
        
        </div>
  }

export default App

