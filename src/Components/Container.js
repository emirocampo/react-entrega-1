import { useState } from "react";
import Quotes from "./Quotes";
import Color from "../Data/Colors.json"

const getRandomIndex = (max) => {
    let i = Math.floor(Math.random() * max)
    return i
}

const Container = () => {
    
    let j = getRandomIndex(Color.colors.length);
    const [color, setColor] = useState(Color.colors[j])
    const getColor = () => {
        
        let j = getRandomIndex(Color.colors.length);
        setColor(Color.colors[j])
    }
    return(
        <>
            <div className="container" style={{backgroundColor:color}}>
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-6">
                        <Quotes setColor={getColor}/>                      
                    </div>
                </div>
            </div>
        </>
    );
}

export default Container