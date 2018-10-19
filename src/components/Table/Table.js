import React, { Component } from 'react';
import './style.css';

import {connect} from 'react-redux';
import {fetchPersonalDetails} from "../../AC";

import DataRow from '../DataRow/DataRow';
import HeaderCell from '../HeaderCell/HeaderCell';
import Pagination from '../Pagination/Pagination';




class Table extends React.Component {

    componentDidMount() {
        const {loaded, loading, isFirstLoading, fetchPersonalDetails} = this.props;
        if((!loaded || !loading) && isFirstLoading) {
            fetchPersonalDetails();
        }
    }

    render() {
        const {loaded, profiles, currentPage, profilesPerPage, numberOfPage} = this.props;

        if (!loaded) {
            return (
                <div>...Loading</div>
            );
        }

        const headers = Object.getOwnPropertyNames(profiles[0]).map(header =>
            <HeaderCell headerTitle={header} />
        );

/*        const dataLines = profiles.map(profile =>
            <DataRow dataDetails={Object.values(profile)}/>
        );*/

        const dataLines = [];
        if (profiles.length - currentPage * profilesPerPage > profilesPerPage) {
            for (let initialProfileIdx = profilesPerPage * (currentPage - 1); initialProfileIdx < currentPage * profilesPerPage; initialProfileIdx++) {
                dataLines.push(
                    <DataRow dataDetails={Object.values(profiles[initialProfileIdx])}/>
                )
            }
        } else {
            for (let initialProfileIdx = profilesPerPage * (currentPage - 1); initialProfileIdx < profiles.length; initialProfileIdx++) {
                dataLines.push(
                    <DataRow dataDetails={Object.values(profiles[initialProfileIdx])}/>
                )
            }
        }

        return (
            <div className={'contentWrapper'}>
                <Pagination />
                <table>
                    <tbody>
                        <tr>
                            {headers}
                        </tr>
                        {dataLines}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        profiles: state.profiles.data,
        loading: state.profiles.loading,
        loaded: state.profiles.loaded,
        isFirstLoading: state.profiles.isFirstLoading,
        currentPage: state.paginator.currentPage,
        profilesPerPage: state.paginator.profilesPerPage,
        numberOfPage: state.paginator.numberOfPage
    }
}, {fetchPersonalDetails})(Table);
