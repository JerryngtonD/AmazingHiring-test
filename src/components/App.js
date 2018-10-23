import React, { Component } from 'react'
import './style.css';
import ContentWrapper from './ContentWrapper/ContentWrapper';


class App extends Component {
    render() {
        return (
            <div className={'table-wrapper'}>
                <ContentWrapper />
            </div>
        )
    }
}

export default App;
