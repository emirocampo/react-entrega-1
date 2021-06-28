import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const Card = ({quote,author}) => {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p><FontAwesomeIcon icon={faQuoteLeft} className="me-2"/>{quote}<FontAwesomeIcon icon={faQuoteRight} className="ms-2"/></p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                </div>
            </div>
        </>
    );
}

export default Card;