import { useState } from "react";
import Game from "./Components/Game";
import Guess from "./Components/Guess";
import Keyboard from "./Components/Keyboard";

function App() {

	let [word, setWord] = useState("");
	let [secretWord, setSecretWord] = useState("");
	let [pressedKeys, setPressedKeys] = useState([]);

	return (
		<div className="App">
			<Game word={{word, setWord}} secretWord={{secretWord, setSecretWord}} pressedKeys={{pressedKeys, setPressedKeys}}/>
			{/* <Keyboard word={word}/> */}
			{/* <Guess/> */}
		</div>
	);
}

export default App;