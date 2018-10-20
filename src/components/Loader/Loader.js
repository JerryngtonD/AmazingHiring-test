import React, { Component } from 'react';
import './style.css';




class Loader extends React.Component {

    render() {
        return (
            <div className={"holder"}>
                <div className={"preloader"}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loader;
