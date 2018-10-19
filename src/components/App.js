import React, { Component } from 'react'
import './style.css';
import Table from './Table/Table';


class App extends Component {
    render() {
        return (
            <div className={'table-wrapper'}>
                <Table />
            </div>
        )
    }
}

export default App;
