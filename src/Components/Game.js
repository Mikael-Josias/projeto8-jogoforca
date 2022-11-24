export default function Game() {
	return (
		<div className="Game">
			<button className="Game__start">Escolher Palavra</button>
			<img className="Game__hangman" src="./assets/imgs/forca0.png" />
			<span className="Game__word">_ _ _ _ _ _ _ _ _</span>
		</div>
		);
	}
	