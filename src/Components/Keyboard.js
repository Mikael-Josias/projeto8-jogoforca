import Letter from "./Letter";

export default function Keyboard(props){

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <>
            <div className="Keyboard">
                {letters.map(l => <Letter value={l} {...props} key={l}/>)}
            </div>
        </>
    );
}