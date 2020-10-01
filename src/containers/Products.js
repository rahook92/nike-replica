import React, {Component} from 'react';

class Products extends Component {

    state = {};

    render(){
        return (
            <div className='ProductPage'>
                <div className='product-nav section-container'>
                    <div className='productPage-label label'>Products</div>
                    <div className='nav-options'>
                        <button className='nav-option'>Hide Filters</button>
                        <div className='sort-dropdown'>
                            <button className="nav-option nav-sort">Sort By</button>
                            <div className="sort-content">
                                <button className='sort-btn'>Featured</button>
                                <button className='sort-btn'>Newest</button>
                                <button className='sort-btn'>Price: Low-High</button>
                                <button className='sort-btn'>Price: High-Low</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;