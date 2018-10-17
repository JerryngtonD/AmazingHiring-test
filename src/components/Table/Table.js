import React, { Component } from 'react';
import './style.css';

import {connect} from 'react-redux';
import {fetchPersonalDetails} from "../../AC";



class Table extends React.Component {

    componentDidMount() {
        const {loaded, loading, fetchPersonalDetails} = this.props;
        if(!loaded || !loading) {
            fetchPersonalDetails();
        }
    }

    render() {
        const {loading, loaded, profiles} = this.props;

        if (!loaded) {
            return (
                <div>...Loading</div>
            );
        }

        console.log(Object.getOwnPropertyNames(profiles[0]));
        return (
            <div>asdasdasd</div>
        );
    }
}

export default connect((state) => {
    return {
        profiles: state.profiles.data,
        loading: state.profiles.loading,
        loaded: state.profiles.loaded
    }
}, {fetchPersonalDetails})(Table);
