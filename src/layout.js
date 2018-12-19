import React from 'react';

import Header from './header';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Sueleesoossoo";
    }

    render() {
        return (
            <div>
                <Header />
                <Header />
                <Header />
                <h1>It's {this.name}!</h1>
            </div>
        );
    }
}