import { useState } from "react";
import { formatWordToSecret, lostGame } from "../Utils";

export default function Guess({playing, word, setFormattedWord, setNumErrors, setGameResult}){

    const [inputValue, setInputValue] = useState('');

    function compareWord(e){
        if (inputValue.toUpperCase() === word) {
            setNumErrors(0);
            lostGame(playing.setIsPlaying);
            setFormattedWord(formatWordToSecret(word, word.split("")));
            setGameResult("winner");
        }else{
            setNumErrors(6);
            lostGame(playing.setIsPlaying);
            setFormattedWord(formatWordToSecret(word, word.split("")));
            setGameResult("lostit");
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
                    onChange={(e) => {setInputValue(e.target.value)}}
                    data-test="guess-input" />
                <button 
                    className="Guess__button" 
                    disabled={!playing.isPlaying}
                    onClick={(e)=>{compareWord(e)}}
                    data-test="guess-button" >Chutar</button>
            </div>
        </>
    );
}
