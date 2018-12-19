import React from 'react';

import Title from './Header/Title';
import Footer from './footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Sueleesoossoo"};
    }
    render() {
        setTimeout(() => {
            this.setState({name: "Leehyun"});
        }, 1000);
        return (
            <div>
                {this.state.name}
                <Title />
                <Footer />
            </div>
        );
    }
}