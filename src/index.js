import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {
    render() {
        const name = "sueleesoossoo";
        return (
            <h1>It's {name}!</h1>
        );
    }
}

const app = document.getElementById('container');
ReactDOM.render(<Layout/>, app);