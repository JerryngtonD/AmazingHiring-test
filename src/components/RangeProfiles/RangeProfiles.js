import React, { Component } from 'react';

import DetailsSelect from "../DetailsSelect/DetailsSelect";
import connect from "react-redux/es/connect/connect";


class RangeProfiles extends React.Component {

    render() {
        let {numberOfButtons, profilesPerPage} = this.props;

        const showMoreDetailsButtons = [...Array(numberOfButtons)].map((_, i) =>
            <DetailsSelect key={`option-${i}`} detailsOnPage={profilesPerPage * (i + 1)} />
        );

        return (
            <div className={'changeNumberProfiles'}>
                {showMoreDetailsButtons}
            </div>
        );
    }
}

export default connect((state) => {
    return {
        profilesPerPage: state.paginator.profilesPerPage,
    }
}, {})(RangeProfiles);


