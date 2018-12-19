import React from 'react';

import Header from './header';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Sueleesoossoo";
    }

    render() {
        var list = [
            <Header />,
            <Header />,
            <Header />,
        ];
        return (
            <div>
                {list}
                <h1>It's {this.name}!</h1>
            </div>
        );
    }
}