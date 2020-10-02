import React, { useState } from 'react';
import SecondaryFilterMenu from './SecondaryFilterMenu/SecondaryFilterMenu';

const SecondaryFilter = (props) => {

    const [filterState, setFilterState] = useState({ secondaryFilterMenuVisible: false });

    const displayFilterMenu = () => {
        setFilterState({
            secondaryFilterMenuVisible: !filterState.secondaryFilterMenuVisible
        })
    }

    return (
        <div className='secondary-filter-container'>
            <div onClick={displayFilterMenu} className='secondary-filter-label'>{ props.label }</div>
            { filterState.secondaryFilterMenuVisible === true ? 
            <SecondaryFilterMenu content={props.content} /> : 
            null }
        </div>
    );
}

export default SecondaryFilter;