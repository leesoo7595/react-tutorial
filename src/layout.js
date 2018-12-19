import React from 'react';

import Title from './Header/Title';
import Footer from './footer';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Footer />
            </div>
        );
    }
}