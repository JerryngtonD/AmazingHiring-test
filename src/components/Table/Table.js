import React, { Component } from 'react';
import './style.css';
import DataRow from "../DataRow/DataRow";
import HeaderCell from "../HeaderCell/HeaderCell";
import {getHash} from "../../helpers";
import connect from "react-redux/es/connect/connect";
import {fetchPersonalDetails} from "../../AC";

class Table extends React.Component {

    render() {
        let {columnTitles, dataObjects,  currentPage, profilesPerPage, chosenProfilesPerPage} = this.props;

        const dataLines = [];
        const beginIndex = chosenProfilesPerPage * (currentPage - 1);
        const endIndex = Math.min(currentPage * chosenProfilesPerPage + profilesPerPage, dataObjects.length);
        for (let initialProfileIdx = beginIndex; initialProfileIdx < endIndex; initialProfileIdx++) {
            dataLines.push(
                <DataRow dataDetails={Object.values(dataObjects[initialProfileIdx])} key={initialProfileIdx.toString()}/>
            )
        }

        const headers = Object.keys(columnTitles).map(columnTitle =>
            <HeaderCell headerTitle={columnTitle} key={getHash(columnTitle)} />
        );

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

export default connect((state) => {
    return {
        currentPage: state.paginator.currentPage,
        profilesPerPage: state.paginator.profilesPerPage,
        numberOfPage: state.paginator.numberOfPage,
        chosenProfilesPerPage: state.paginator.chosenProfilesPerPage
    }
}, {})(Table);

