import React from 'react';

const ProductsNavCollapsed = (props) => {
    return (
        <div className='product-nav section-container'>
            <div className='productPage-label label'>Products</div>
            <button className='filter-btn' onClick={props.displayFilterMenu}>Filter</button>
        </div>
    );
}

export default ProductsNavCollapsed;