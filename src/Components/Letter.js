import { useState } from "react";
import { formatWordToSecret } from "../Utils";

export default function Letter({value, isPlaying, word, setFormattedWord, selectedLetters, erros}){
    
    let [clicked, setClicked] = useState(false);

    function clickLetter(e){
        let arr = [...selectedLetters.selectedLetters, e.target.value];
        selectedLetters.setSelectedLetters(arr);

        let formattedWord = formatWordToSecret(word, arr);
        setFormattedWord(formattedWord);

        setClicked(true);
    }
    
    return (
        <>
            <button 
                className={(isPlaying === true && clicked === false)? "activated Keyboard__letter" : "deactivated Keyboard__letter"} 
                value={value}
                onClick={(e) => clickLetter(e)}
                disabled={!(isPlaying === true && clicked === false)} >{value}</button>
        </>
    );
}
