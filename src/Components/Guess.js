import { useState } from "react";
import { formatWordToSecret, lostGame } from "../Utils";

export default function Guess({playing, word, setFormattedWord, setNumErrors}){

    const [inputValue, setInputValue] = useState('');

    function compareWord(e){
        if (inputValue.toUpperCase() === word) {
            console.log("oi")
        }else{
            setNumErrors(6);
            lostGame(playing.setIsPlaying);
            setFormattedWord(formatWordToSecret(word, word.split("")));
        }
    }

    return (
        <>
            <div className="Guess">
                <span>Já sei a palavra!</span>
                <input 
                    type="text" 
                    className="Guess__input"
                    disabled={!playing.isPlaying}
                    onChange={(e) => {setInputValue(e.target.value)}} />
                <button 
                    className="Guess__button" 
                    disabled={!playing.isPlaying}
                    onClick={(e)=>{compareWord(e)}} >Chutar</button>
            </div>
        </>
    );
}
