import React from 'react';

const PrimaryFilter = (props) => {
    return (
        <React.Fragment>
            { props.content.map(filter => <button key={Math.random() * 100} className='filter-btn'>{filter}</button> )}
        </React.Fragment>
    );
}

export default PrimaryFilter;