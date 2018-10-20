import React, { Component } from 'react';
import './style.css';

import {getHash} from "../../helpers";

class DataRow extends React.Component {

    render() {
        const {dataDetails} = this.props;
        const dataChunks = dataDetails.map((dataDetail, idx) =>
            <td className={'personalDetailCell'} key={getHash(idx.toString())}>{dataDetail}</td>
        );
        return (
            <tr>
                {dataChunks}
            </tr>
        );
    }
}

export default DataRow;
