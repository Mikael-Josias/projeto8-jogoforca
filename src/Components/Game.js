import palavras from "../palavras";
import { formatWordToSecret } from "../Utils";

export default function Game({playing, word, formattedWord, setSelectedLetters, errors, gameResult}){

	function startGame(event){
		getWord();
		errors.setNumErrors(0);
		setSelectedLetters([]);
		gameResult.setGameResult('');
		playing.setIsPlaying(true);
	}

	function getWord(){
		let newWord = palavras[Math.floor(Math.random() * palavras.length)];
		let formattedNewWord = formatWordToSecret(newWord);
		console.log(newWord);
		word.setWord(newWord.toUpperCase());
		formattedWord.setFormattedWord(formattedNewWord);
	}

	return (
		<>
			<div className="Game">
				<button className="Game__start" onClick={e => startGame(e)} data-test="choose-word" >Escolher Palavra</button>
				<img className="Game__hangman" src={`./assets/imgs/forca${errors.numErrors}.png`} data-test="game-image" />
				<span className={`Game__word ${gameResult.gameResult}`} data-test="word" data-answer={word.word} >{formattedWord.formattedWord}</span>
			</div>
		</>
	);
}

