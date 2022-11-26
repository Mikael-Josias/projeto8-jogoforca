import palavras from "../palavras";
import { formatWordToSecret } from "../Utils";

export default function Game({playing, setWord, formattedWord, errors}){

	function startGame(event){
		getWord();
		errors.setNumErrors(0);
		playing.setIsPlaying(true);
	}

	function getWord(){
		let newWord = palavras[Math.floor(Math.random() * palavras.length)];
		let formattedNewWord = formatWordToSecret(newWord);

		setWord(newWord.toUpperCase());
		formattedWord.setFormattedWord(formattedNewWord);
	}

	return (
		<>
			<div className="Game">
				<button className="Game__start" onClick={e => startGame(e)} >Escolher Palavra</button>
				<img className="Game__hangman" src={`./assets/imgs/forca${errors.numErrors}.png`} />
				<span className="Game__word">{formattedWord.formattedWord}</span>
			</div>
		</>
	);
}

