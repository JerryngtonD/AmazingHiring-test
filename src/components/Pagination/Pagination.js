import React, { Component } from 'react';
import './style.css';

import {connect} from 'react-redux';

import PaginationButton from '../PaginationButton/PaginationButton';

import {getHash} from "../../helpers";


class Pagination extends React.Component {

    render() {
        const {numberOfPage} = this.props;
        const paginationButtons = [];
        for (let idx = 0; idx < numberOfPage; idx++) {
            paginationButtons.push(
                <PaginationButton counterPage={idx+1} key={getHash(idx.toString())}/>
            )
        }

        return (
           <div className={'pagination' + ' ' + 'table-wrapper__pagination'}>
               {paginationButtons}
           </div>
        );
    }
}

export default connect((state) => {
    return {
        numberOfPage: state.paginator.numberOfPage
    }
}, {})(Pagination);
