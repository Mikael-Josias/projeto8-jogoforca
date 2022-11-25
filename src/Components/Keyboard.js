// import { useState } from "react";
// import Letter from "./Letter";

// export default function Keyboard({word}){

//     let [activated, setActivated] = useState(word? true: false);

//     const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//     return (
//         <div className={activated? "Keyboard activated" : "Keyboard deactivated"}>
//             {letters.map(l => <Letter letter={l} disabled={activated} key={l}/>)}
//         </div>
//     );
// }