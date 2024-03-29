import React from 'react';

type Greeting = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
}

function Greetings({name,mark,optional,onClick}: Greeting){

    const handleClick = () => onClick(name);

    return (
        <div>
            Welcome {name} {mark}
            {optional && <p>{optional}</p>}
            <button onClick={handleClick}>버튼</button>
        </div>
    )
}

export default Greetings;
