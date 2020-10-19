import React from 'react';
import check from '../../../../assets/icons/checkbox-24.png';

const secondaryFilterMenu = (props) => {

    return (
        <div className='secondary-filter-content'>
            { props.content.items.map( item => {

                let isChecked;

                props.selectedFilters.filter(x => x === item ? isChecked = {backgroundImage: `url(${check})`} : null);

                return  <div key={item} className='secondary-filter-item'>
                            <div 
                                onClick={(e, filterItem) => { props.isSelected(e, item) }} 
                                className='check-box' 
                                style={isChecked}></div>
                            <button className='filter-btn'>{item}</button>
                        </div>

                } 
            )}
        </div>
    );
}

export default secondaryFilterMenu;