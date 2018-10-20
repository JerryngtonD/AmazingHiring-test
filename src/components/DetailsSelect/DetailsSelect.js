import React, { Component } from 'react';
import './style.css';
import connect from "react-redux/es/connect/connect";
import {changeNumberProfilesOnPage} from "../../AC";
import {changeCurrentButton} from "../../AC";


class DetailsSelect extends React.Component {


    changeDetailsOnPage = (event) => {
        const {changeNumberProfilesOnPage, changeCurrentButton, numberOfProfiles, currentPage} = this.props;
        const newProfilesOnPage = parseInt(event.target.innerHTML, 10);
        const newNumberOfPages = Math.ceil(numberOfProfiles / newProfilesOnPage);
        if(newNumberOfPages > currentPage) {
            changeNumberProfilesOnPage(newProfilesOnPage, newNumberOfPages);
        } else {
            const initialPageIdx = 1;
            changeCurrentButton(initialPageIdx);
            changeNumberProfilesOnPage(newProfilesOnPage, newNumberOfPages);
        }

    };

    render() {
        const {detailsOnPage, currentProfilesPerPage} = this.props;
        const activeModeDetails = detailsOnPage === currentProfilesPerPage ? 'activeNumberDetails' : '';

        return (
            <button className={'detailsSelectButton' + ' ' + activeModeDetails}  onClick={this.changeDetailsOnPage}>{detailsOnPage}</button>
        );
    }
}

export default connect((state) => {
    return {
        currentProfilesPerPage: state.paginator.chosenProfilesPerPage,
        numberOfProfiles: state.paginator.numberOfProfiles,
        currentPage: state.paginator.currentPage

    }
}, {changeNumberProfilesOnPage, changeCurrentButton})(DetailsSelect);
