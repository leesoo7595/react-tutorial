import React from 'react';

export default class Title extends React.Component {

    render() {
        return (
            <h1 style={
                {
                    lineHeight: '600px',
                    verticalAlign: 'middle',
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                    font: 'bold',
                    backgroundColor: 'blue'
                }
            }>{this.props.title}</h1>
        )
    }
}