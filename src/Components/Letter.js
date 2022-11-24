export default function Letter({letter}) {
    return (
        <>
            <button className="Keyboard__letter" value={letter}>{letter}</button>
        </>
    );
}