import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {
    getVal(val) {
        return "Sueleesoossoo " + val;
    }

    render() {
        return (
            <h1>{this.getVal("can do everything")}!</h1>
        );
    }
}

const app = document.getElementById('container');
ReactDOM.render(<Layout/>, app);