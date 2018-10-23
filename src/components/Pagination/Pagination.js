import React, { Component } from 'react';
import './style.css';

import {connect} from 'react-redux';

import PaginationButton from '../PaginationButton/PaginationButton';

import {getHash} from "../../helpers";
import DetailsSelect from "../DetailsSelect/DetailsSelect";


class Pagination extends React.Component {

    render() {
        const {numberOfPage} = this.props;
        const paginationButtons = [...Array(numberOfPage)].map((_, i) =>
            <PaginationButton counterPage={i+1} key={getHash(i.toString())} />
        );

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
