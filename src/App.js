import { useState } from "react";
import Game from "./Components/Game";
import Keyboard from "./Components/Keyboard";
import Guess from "./Components/Guess";

export default function App() {

	const [isPlaying, setIsPlaying] = useState(false);
	const [word, setWord] = useState('');
	const [formattedWord, setFormattedWord] = useState('');
	const [selectedLetters, setSelectedLetters] = useState([]);
	const [numErrors, setNumErrors] = useState(0);
	const [gameResult, setGameResult] = useState('');

	return (
		<>
			<div className="App">
				<Game
					playing={{isPlaying, setIsPlaying}}
					word={{word, setWord}}
					formattedWord={{formattedWord, setFormattedWord}}
					setSelectedLetters={setSelectedLetters}
					errors={{numErrors, setNumErrors}}
					gameResult={{gameResult, setGameResult}} />

				<Keyboard 
				playing={{isPlaying, setIsPlaying}}
					word={word}
					setFormattedWord={setFormattedWord}
					selectedLetters={{selectedLetters, setSelectedLetters}}
					errors={{numErrors, setNumErrors}}
					setGameResult={setGameResult} />

				<Guess 
					playing={{isPlaying, setIsPlaying}}
					word={word}
					setFormattedWord={setFormattedWord}
					setNumErrors={setNumErrors}
					setGameResult={setGameResult} />
			</div>
		</>
	);
}
