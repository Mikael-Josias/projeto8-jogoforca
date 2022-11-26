import { useState } from "react";
import { formatWordToSecret, lostGame } from "../Utils";

export default function Letter({value, playing, word, setFormattedWord, selectedLetters, errors}){
    
    let clicked = false;
    const selLetters = [...selectedLetters.selectedLetters];

    selLetters.forEach((sl) => {
        if (value === sl) {
            clicked = true;
            console.log(true)
        }
    });


    function clickLetter(e){
        selLetters.push(e.target.value);
        selectedLetters.setSelectedLetters(selLetters);
        verifyError(e.target.value);

        let formattedWord = formatWordToSecret(word, selLetters);
        setFormattedWord(formattedWord);
    }

    function verifyError(letter){
        if (!word.includes(letter)) {
            let num = errors.numErrors + 1;
            console.log(num)
            errors.setNumErrors(num);

            if (num == 6) {
                lostGame(playing.setIsPlaying);
            }
        }
    }
    
    return (
        <>
            <button 
                className={(playing.isPlaying === true && clicked === false)? "activated Keyboard__letter" : "deactivated Keyboard__letter"} 
                value={value}
                onClick={(e) => clickLetter(e)}
                disabled={!(playing.isPlaying === true && clicked === false)} >{value}</button>
        </>
    );
}
