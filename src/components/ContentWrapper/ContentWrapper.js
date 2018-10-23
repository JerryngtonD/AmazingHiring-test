import React, { Component } from 'react';
import './style.css';

import {connect} from 'react-redux';
import {fetchPersonalDetails} from "../../AC";

import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination';
import Table from '../Table/Table'
import HeaderCell from "../HeaderCell/HeaderCell";
import {getHash} from '../../helpers';
import DataRow from '../DataRow/DataRow';
import DetailsSelect from '../DetailsSelect/DetailsSelect'



class ContentWrapper extends React.Component {

    componentDidMount() {
        const {loaded, loading, isFirstLoading, fetchPersonalDetails} = this.props;
        if((!loaded || !loading) && isFirstLoading) {
            fetchPersonalDetails();
        }
    }

    render() {
        let {loaded, profiles, currentPage, profilesPerPage, chosenProfilesPerPage} = this.props;

        if (!loaded) {
            return (
                <Loader/>
            );
        }

        const numberOfButtons = 3;
        const showMoreDetailsButtons = [...Array(numberOfButtons)].map((_, i) =>
            <DetailsSelect key={`option-${i}`} detailsOnPage={profilesPerPage * (i + 1)} />
        );

        const headers = Object.getOwnPropertyNames(profiles[0]).map(header =>
            <HeaderCell headerTitle={header} key={getHash(header)} />
        );

        const dataLines = [];
        const beginIndex = chosenProfilesPerPage * (currentPage - 1);
        const endIndex = Math.min(currentPage * chosenProfilesPerPage + profilesPerPage, profiles.length);
        for (let initialProfileIdx = beginIndex; initialProfileIdx < endIndex; initialProfileIdx++) {
            dataLines.push(
                <DataRow dataDetails={Object.values(profiles[initialProfileIdx])} key={initialProfileIdx.toString()}/>
            )
        }

        return (
            <div className={'contentWrapper'}>
                <div className={'changeNumberProfiles'}>
                    {showMoreDetailsButtons}
                </div>
                <Pagination />
                <Table headers={headers} dataLines={dataLines}/>
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
        numberOfPage: state.paginator.numberOfPage,
        chosenProfilesPerPage: state.paginator.chosenProfilesPerPage
    }
}, {fetchPersonalDetails})(ContentWrapper);
