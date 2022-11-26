import { useState } from "react";
import Game from "./Components/Game";
import Keyboard from "./Components/Keyboard";

export default function App() {

	let [isPlaying, setIsPlaying] = useState(false);
	let [word, setWord] = useState('');
	let [formattedWord, setFormattedWord] = useState('');
	let [selectedLetters, setSelectedLetters] = useState('');
	let [numErrors, setNumErrors] = useState(0);

	return (
		<>
			<div className="App">
				<Game
					playing={{isPlaying, setIsPlaying}}
					setWord={setWord}
					formattedWord={{formattedWord, setFormattedWord}}
					setErrors={setNumErrors} />

				<Keyboard 
					isPlaying={isPlaying}
					word={word}
					setFormattedWord={setFormattedWord}
					selectedLetters={{selectedLetters, setSelectedLetters}}
					erros={{numErrors, setNumErrors}} />
			</div>
		</>
	);
}
