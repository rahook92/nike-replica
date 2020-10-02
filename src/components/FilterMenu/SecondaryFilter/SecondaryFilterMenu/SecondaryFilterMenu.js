import React from 'react';

const secondaryFilterMenu = (props) => {

    const selectCheckBox = (e) => {
        e.target.style.backgroundImage = "url('../../assets/icons/checkbox-24.png')";
    }

    return (
        <div className='secondary-filter-content'>
            { props.content.items.map( item => {

                return  <div className='secondary-filter-item'>
                            <div onClick={selectCheckBox} className='check-box'></div>
                            <button className='filter-btn'>{item}</button>
                        </div>

                } 
            )}
        </div>
    );
}

export default secondaryFilterMenu;