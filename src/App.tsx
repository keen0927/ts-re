import * as React from 'react';
// import Greetings from "./Greetings";
// import Counter from "./Counter";
import MyForm from './MyForm';

// const App = () => {
//
//     const onClick = (name: string) => {
//         console.log(`Welcome ${name}`);
//     };
//     return <Greetings name={`Keen`} onClick={onClick} />
// };


const App = () => {
    // const onClick = (name: string) => {
    //     console.log(name);
    // }
    // return <Greetings name={`keen`} mark={`hi`} onClick={onClick}/>

    const onSubmit = (form: {name: string; description: string}) => {
        console.log(form);
    };

    return (
        <div>
            {/*<Counter/>*/}
            <MyForm onSubmit={onSubmit} />
        </div>
    )
}

export default App;
