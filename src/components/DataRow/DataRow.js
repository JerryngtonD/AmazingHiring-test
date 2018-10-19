import React, { Component } from 'react';
import './style.css';

class DataRow extends React.Component {

    render() {
        const {dataDetails} = this.props;
        const dataChunks = dataDetails.map(dataDetail =>
            <td>{dataDetail}</td>
        );
        return (
            <tr>
                {dataChunks}
            </tr>
        );
    }
}

export default DataRow;
