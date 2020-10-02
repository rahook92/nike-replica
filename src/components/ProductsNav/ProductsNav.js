import React from 'react';

const ProductsNav = (props) => {
    return (
        <div className='product-nav section-container'>
            <div className='productPage-label label'>Products</div>
            <div className='nav-options'>
                <button onClick={props.displayFilterMenu} className='nav-option nav-filter'>
                    { props.areFiltersVisible  ? 'Hide Filters' : 'Show Filters'}
                </button>
                <div className='sort-dropdown'>
                    <button className="nav-option nav-sort">Sort By</button>
                    <div className="sort-content">
                        <button className='filter-btn'>Featured</button>
                        <button className='filter-btn'>Newest</button>
                        <button className='filter-btn'>Price: Low-High</button>
                        <button className='filter-btn'>Price: High-Low</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsNav;