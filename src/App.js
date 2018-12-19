import React from 'react';
import MyName from './MyName';
import Counter from "./Counter";

class App extends React.Component {
    render() {
        return (
            <div>
                <MyName name='리액트'/>
                <Counter />
            </div>
        );
    }
}

export default App;