
export default function Guess({isPlaying}){
    return (
        <>
            <div className="Guess">
                <span>Já sei a palavra!</span>
                <input 
                    type="text" 
                    className="Guess__input"
                    disabled={!isPlaying} />
                <button 
                    className="Guess__button" 
                    disabled={!isPlaying}
                    onClick={()=>{console.log("ola")}} >Chutar</button>
            </div>
        </>
    );
}
