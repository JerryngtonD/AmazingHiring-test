import React, { Component } from 'react';
import './style.css';
import connect from "react-redux/es/connect/connect";
import {changeCurrentButton} from "../../AC";

class PaginationButton extends React.Component {

    changeCurrentButton = (event) => {
        const {changeCurrentButton} = this.props;
        const clickedButton = event.target;
        const numberClickedButton = parseInt(clickedButton.innerHTML, 10);
        changeCurrentButton(numberClickedButton);
    };

    render() {
        const {counterPage, currentPage} = this.props;
            let activeClass = counterPage === currentPage ? 'activeButton' : '';

        return (
            <button className={'paginationButton' + ' ' + activeClass} onClick={this.changeCurrentButton}>{counterPage}</button>
        );
    }
}

export default connect((state) => {
    return {
        currentPage: state.paginator.currentPage,

    }
}, {changeCurrentButton})(PaginationButton);

