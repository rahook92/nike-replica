import React from 'react';

const PrimaryFilter = (props) => {
    return (
        <React.Fragment>
            { props.content.map(filter => <button className='filter-btn'>{filter}</button> )}
        </React.Fragment>
    );
}

export default PrimaryFilter;