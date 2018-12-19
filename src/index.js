import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {
    render() {
        return (
            <h1>It's Working!</h1>
        );
    }
}

const app = document.getElementById('container');
ReactDOM.render(<Layout/>, app);