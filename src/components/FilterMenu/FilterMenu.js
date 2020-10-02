import React from 'react';
import PrimaryFilter from './PrimaryFilter/PrimaryFilter';
import SecondaryFilter from './SecondaryFilter/SecondaryFilter';

const filterMenu = (props) => {

    const primaryFilters = ['Option', 'Option', 'Option', 'Option', 'Option', 'Option', 'Option', 'Option']

    return (
        <div className='filterMenu'>
            <div className='primary-filters'>
                <PrimaryFilter content={primaryFilters} />
            </div>
            <div className='secondary-filters'>
                <SecondaryFilter label='Gender' content={{ items: ['Men', 'Women', 'Unisex'] }} />
                <SecondaryFilter label='Kids' content={{ items: ['Boys', 'Girls'] }} />
                <SecondaryFilter label='Shop By Price' content={{ items: ['$0 - $25', '$25 - $50', '$50 - $100', 'Over $100'] }} />
                <SecondaryFilter label='Color' content={{ items: ['Purple', 'Black', 'Red', 'Orange', 'Blue', 'White', 'Brown', 'Green', 'Yellow', 'Multi-Color', 'Grey', 'Pink'] }} />
                <SecondaryFilter label='Sports &amp; Activities' content={{ items: ['Lifestyle', 'Running', 'Training & Gym', 'Yoga'] }} />
            </div>
        </div>
    );  
} 

export default filterMenu;