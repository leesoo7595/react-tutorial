import React from 'react';

import Title from './Header/Title';
import Footer from './footer';
import Header from './Header';

export default class Layout extends React.Component {
    render() {
        const title = "Welcome Leehyun!";

        return (
            <div>
                <Header title={title}/>
                <Header title={"Other Title"}/>
                <Footer />
            </div>
        );
    }
}