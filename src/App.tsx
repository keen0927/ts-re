import * as React from 'react';
import Greetings from "./Greetings";

const App = () => {

    const onClick = (name: string) => {
        console.log(`Welcome ${name}`);
    };
    return <Greetings name={`Keen`} onClick={onClick} />
};

export default App;
