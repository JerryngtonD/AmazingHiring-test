import React, { Component } from 'react';
import './style.css';
import connect from "react-redux/es/connect/connect";
import {changeCurrentButton} from "../../AC";

class PaginationButton extends React.Component {

    changeCurrentButton = (counterPage) => {
        const {changeCurrentButton} = this.props;
        changeCurrentButton(counterPage);
    };

    render() {
        const {counterPage, currentPage} = this.props;
            let activeClass = counterPage === currentPage ? 'activeButton' : '';

        return (
            <button className={'paginationButton' + ' ' + activeClass} onClick={() => this.changeCurrentButton(counterPage)}>{counterPage}</button>
        );
    }
}

export default connect((state) => {
    return {
        currentPage: state.paginator.currentPage,

    }
}, {changeCurrentButton})(PaginationButton);

