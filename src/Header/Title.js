import React from 'react';

export default class Title extends React.Component {
    constructor() {
        super();
        this.name = "SOMETHING PROBLEM IN YOUR COMPUTER!";
    }

    render() {
        return (
            <h1 style={
                {
                    lineHeight: '600px',
                    verticalAlign: 'middle',
                    width: '100%',
                    height: '2000px',
                    textAlign: 'center',
                    color: 'white',
                    font: 'bold',
                    backgroundColor: 'blue'
                }
            }>THERE IS {this.name} and {this.props.title}</h1>
        )
    }
}