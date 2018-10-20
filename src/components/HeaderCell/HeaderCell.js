import React, { Component } from 'react';
import './style.css';

class HeaderCell extends React.Component {

    getHash(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    }


    render() {
        const {headerTitle} = this.props;

        return (
            <th className={'tableTitle'} key={this.getHash(headerTitle)}>{headerTitle}</th>
        );
    }
}

export default HeaderCell;
