export default function Guess({disabled}) {
    return (
        <div className="Guess">
            <span>Já sei a palavra!</span>
            <input type="text" className="Guess__input"/>
            <button className="Guess__button" disabled={disabled}>Chutar</button>
        </div>
    );
}