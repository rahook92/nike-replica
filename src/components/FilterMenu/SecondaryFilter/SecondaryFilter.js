import React, { useState } from 'react';
import SecondaryFilterMenu from './SecondaryFilterMenu/SecondaryFilterMenu';

const SecondaryFilter = (props) => {

    const [filterState, setFilterState] = useState({ 
            selectedFilters: [],
            secondaryFilterMenuVisible: false 
        });

    const displayFilterMenu = () => {
        let newFilterState = {...filterState};
        newFilterState.secondaryFilterMenuVisible = !filterState.secondaryFilterMenuVisible
        setFilterState(newFilterState);
    }

    const isSelected = (e, item) => {
        let newSelectedFilters = [...filterState.selectedFilters];
        newSelectedFilters.includes(item) ? 
        newSelectedFilters.splice(newSelectedFilters.indexOf(item), 1) : 
        newSelectedFilters.push(item);
        setFilterState({
            selectedFilters: newSelectedFilters,
            secondaryFilterMenuVisible: filterState.secondaryFilterMenuVisible
        })
    }

    let counter = filterState.selectedFilters.length > 0 ? `(${filterState.selectedFilters.length})` : '';

    return (
        <div className='secondary-filter-container'>
            <div onClick={displayFilterMenu} className='secondary-filter-label'>{ `${props.label} ${counter}` }</div>
            { filterState.secondaryFilterMenuVisible === true ? 
            <SecondaryFilterMenu isSelected={isSelected} selectedFilters={filterState.selectedFilters} content={props.content} /> : 
            null }
        </div>
    );
}

export default SecondaryFilter;