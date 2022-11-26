import palavras from "../palavras";
import { formatWordToSecret } from "../Utils";

export default function Game({playing, setWord, formattedWord, setErrors}){

	function startGame(event){
		getWord();
		setErrors(0);
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
				<img className="Game__hangman" src="./assets/imgs/forca0.png" />
				<span className="Game__word">{formattedWord.formattedWord}</span>
			</div>
		</>
	);
}
