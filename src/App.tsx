import * as React from 'react';
import Greetings from "./Greetings";

// const App = () => {
//
//     const onClick = (name: string) => {
//         console.log(`Welcome ${name}`);
//     };
//     return <Greetings name={`Keen`} onClick={onClick} />
// };


const App = () => {
    const onClick = (name: string) => {
        console.log(name);
    }
    return <Greetings name={`keen`} mark={`hi`} onClick={onClick}/>
}

export default App;
