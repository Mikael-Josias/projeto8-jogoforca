import { useState } from "react";
import { formatWordToSecret, lostGame } from "../Utils";

export default function Letter({value, playing, word, setFormattedWord, selectedLetters, errors, setGameResult}){
    
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

        let formattedWord = formatWordToSecret(word, selLetters);
        setFormattedWord(formattedWord);

        verifyError(e.target.value);

        if (compareWords(formattedWord)) {
            lostGame(playing.setIsPlaying);
            setGameResult("winner");
        }
    }

    function verifyError(letter){
        if (!word.includes(letter)) {
            let num = errors.numErrors + 1;
            console.log(num)
            errors.setNumErrors(num);

            if (num == 6) {
                lostGame(playing.setIsPlaying);
                setFormattedWord(formatWordToSecret(word, word.split("")));
                setGameResult("lostit");
            }
            
        }
    }

    function compareWords(formattedWord){
        for (let i = 0; i < formattedWord.length; i++) {
            if (formattedWord[i] !== word[i]) {
                return false;
            }
        }

        return true;
    }
    
    return (
        <>
            <button 
                className={(playing.isPlaying === true && clicked === false)? "activated Keyboard__letter" : "deactivated Keyboard__letter"} 
                value={value}
                onClick={(e) => clickLetter(e)}
                disabled={!(playing.isPlaying === true && clicked === false)}
                data-test="letter" >{value}</button>
        </>
    );
}
