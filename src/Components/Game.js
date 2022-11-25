import { formatWordToSecret } from "../Utils";
import palavras from "../palavras";

export default function Game({word, secretWord, pressedKeys}) {

	function pickWord(){
		let newWord = palavras[Math.floor(Math.random() * palavras.length)];

		pressedKeys.setPressedKeys([]);
		word.setWord(newWord);

		secretWord.setSecretWord(formatWordToSecret(newWord));
	}

	return (
		<div className="Game">
			<button className="Game__start" onClick={pickWord}>Escolher Palavra</button>
			<img className="Game__hangman" src="./assets/imgs/forca0.png" />
			<span className="Game__word">{secretWord.secretWord}</span>
		</div>
		);
}
