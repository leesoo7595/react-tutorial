import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Sueleesoossoo";
    }

    render() {
        return (
            <h1>It's {this.name}!</h1>
        );
    }
}

const app = document.getElementById('container');
ReactDOM.render(<Layout/>, app);