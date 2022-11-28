import palavras from "../palavras";
import { formatWordToSecret } from "../Utils";

export default function Game({playing, setWord, formattedWord, setSelectedLetters, errors, gameResult}){

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
		setWord(newWord.toUpperCase());
		formattedWord.setFormattedWord(formattedNewWord);
	}

	return (
		<>
			<div className="Game">
				<button className="Game__start" onClick={e => startGame(e)} >Escolher Palavra</button>
				<img className="Game__hangman" src={`./assets/imgs/forca${errors.numErrors}.png`} />
				<span className={`Game__word ${gameResult.gameResult}`}>{formattedWord.formattedWord}</span>
			</div>
		</>
	);
}

