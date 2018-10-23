import React, { Component } from 'react';
import './style.css';

class Table extends React.Component {

    render() {
        let {headers, dataLines} = this.props;
        return (
                <table>
                    <tbody>
                        <tr>
                            {headers}
                        </tr>
                        {dataLines}
                    </tbody>
                </table>
        );
    }
}

export default Table;
