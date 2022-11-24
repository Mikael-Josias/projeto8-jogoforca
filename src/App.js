import Game from "./Components/Game";
import Guess from "./Components/Guess";
import Keyboard from "./Components/Keyboard";

function App() {
	return (
		<div className="App">
			<Game />
			<Keyboard/>
			<Guess/>
		</div>
	);
}

export default App;