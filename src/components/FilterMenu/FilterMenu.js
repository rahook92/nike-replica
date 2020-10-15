import React from 'react';
import PrimaryFilter from './PrimaryFilter/PrimaryFilter';
import SecondaryFilter from './SecondaryFilter/SecondaryFilter';

const filterMenu = (props) => {

    const primaryFilters = ['Option', 'Option', 'Option', 'Option', 'Option', 'Option', 'Option', 'Option'];

    return (
        <div className='filterMenu'>
            { props.windowWidth > 1000 ?    
                <div className='primary-filters'>
                    <PrimaryFilter content={primaryFilters} />
                </div> : null }
            <div className='secondary-filters'>
                { props.windowWidth < 1000 ? <button className='close-btn' onClick={props.displayFilterMenu}>close</button> : null }
                <SecondaryFilter label='Gender' windowWidth={props.windowWidth} content={{ items: ['Men', 'Women', 'Unisex'] }} />
                <SecondaryFilter label='Kids' windowWidth={props.windowWidth} content={{ items: ['Boys', 'Girls'] }} />
                <SecondaryFilter label='Shop By Price' windowWidth={props.windowWidth} content={{ items: ['$0 - $25', '$25 - $50', '$50 - $100', 'Over $100'] }} />
                <SecondaryFilter label='Color' windowWidth={props.windowWidth} content={{ items: ['Purple', 'Black', 'Red', 'Orange', 'Blue', 'White', 'Brown', 'Green', 'Yellow', 'Multi-Color', 'Grey', 'Pink'] }} />
                <SecondaryFilter label='Sports &amp; Activities' windowWidth={props.windowWidth} content={{ items: ['Lifestyle', 'Running', 'Training & Gym', 'Yoga'] }} />
            </div>
        </div>
    );  
} 

export default filterMenu;