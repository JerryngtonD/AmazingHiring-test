import React, { Component } from 'react';
import './style.css';
import {compareByStrings} from "../../helpers";
import connect from "react-redux/es/connect/connect";
import {sortProfilesOnPage} from "../../AC";

import {getHash} from "../../helpers";

class HeaderCell extends React.Component {

    state = {
        isClicked: false,
        headerTitle: this.props.headerTitle
    };

    toggleIsClicked = () => {
        const clickedValue = !this.state.isClicked;
        this.setState({
            isClicked: clickedValue
        })
    };

    dynamicSort = (property) => {
        let sortOrder = null;
        if(this.state.isClicked) {
            sortOrder = -1;
        } else {
            sortOrder = 1
        }
        return function (a,b) {
            const objA = a[property].toUpperCase();
            const objB = b[property].toUpperCase();
            let result = (objA < objB) ? -1 : (objA > objB) ? 1 : -1;
            return result * sortOrder;
        };
    };

    sortByHeader = (header) => {
        const {profiles, sortProfilesOnPage} = this.props;
        const sortBy = header.target.innerHTML;
        const sortedProfiles = profiles.sort(this.dynamicSort(sortBy));
        this.toggleIsClicked();
        sortProfilesOnPage(sortedProfiles, sortBy);
    };



    render() {
        const {headerTitle} = this.props;

        return (
            <th className={'tableTitle'}  onClick={this.sortByHeader}>{headerTitle}</th>
        );
    }
}

export default connect((state) => {
    return {
        profiles: state.profiles.data
    }
}, {sortProfilesOnPage})(HeaderCell);
