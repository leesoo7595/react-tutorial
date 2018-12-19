import React from 'react';

export default class Title extends React.Component {
    constructor() {
        super();
        this.name = "Title"
    }

    render() {
        return (
            <h1>Welcome this is {this.name}</h1>
        )
    }
}