import React, { Component } from 'react';
import './style.css';

import {connect} from 'react-redux';
import {fetchPersonalDetails} from "../../AC";

import Loader from '../Loader/Loader'
import Pagination from '../Pagination/Pagination';
import Table from '../Table/Table'
import RangeProfiles from '../RangeProfiles/RangeProfiles'



class ContentWrapper extends React.Component {

    componentDidMount() {
        const {loaded, loading, isFirstLoading, fetchPersonalDetails} = this.props;
        if((!loaded || !loading) && isFirstLoading) {
            fetchPersonalDetails();
        }
    }

    render() {
        let {loaded, profiles} = this.props;
        const numberOfButtons = 3;

        if (!loaded) {
            return (
                <Loader/>
            );
        }

        return (
            <div className={'contentWrapper'}>
                <RangeProfiles numberOfButtons={numberOfButtons}/>
                <Pagination />
                <Table columnTitles={profiles[0]} dataObjects={profiles}/>
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
