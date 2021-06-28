import React,{useState} from 'react'
import Card from "./Card";
import Data from '../Data/Data.json'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const getRandomIndex = (max) => {
    let i = Math.floor(Math.random() * max)
    return i
}

const Quotes = ({setColor}) => {
    const maxD = Data.quotes.length
    const i = getRandomIndex(maxD)
    
    const [quote, setQuote] = useState(Data.quotes[i].quote);
    const [author, setAuthor] = useState(Data.quotes[i].author);
    
    function ramdomQuote() {
        const j = getRandomIndex(maxD)
        setQuote(Data.quotes[j].quote)
        setAuthor(Data.quotes[j].author)
        setColor()
    }
    
    return(
    <>
        
            <Card quote={quote} author={author}/>
            <br/>
            <div className="d-flex justify-content-between">
                <a href={`https://twitter.com/intent/tweet?text="${quote}"%20author:%20${author}`} target={"blank"}><FontAwesomeIcon icon={faTwitter} size="3x"/></a>                
                <button type="button" className="btn btn-primary mt-2 w-auto " onClick={ramdomQuote}>Next</button>
            </div>
            
        
    </>);
}

export default Quotes