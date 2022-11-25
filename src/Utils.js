
export const formatWordToSecret = (word, letters = []) =>{
    let arr = word.split("");
    let secretWord = [...arr];
    secretWord.fill("_ ");

    for (let i = 0; i < letters.length; i++) {
        let indexOfAll = [];

        arr.forEach((a, index) => {
            
            if (letters[i] === a) {
                indexOfAll.push(index);
            }
        });
        
        for (let j = 0; j < indexOfAll.length; j++) {
            secretWord[indexOfAll[j]] = letters[i];
            
        }
    }

    return secretWord;
};