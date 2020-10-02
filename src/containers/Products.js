import React, {Component} from 'react';
import ProductTile from '../components/ProductTile/ProductTile';
import FilterMenu from '../components/FilterMenu/FilterMenu';

class Products extends Component {

    state = {
        products: [
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Women',
                colors: ['Red', 'Blue']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['green']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Women',
                colors: ['yellow']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['yellow', 'green', 'red']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Women',
                colors : ['blue', 'green']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['black']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['black', 'white']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['red', 'black', 'white']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['black']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['red']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['black', 'red', 'yellow', 'white']
            },
            {
                productType: 'Sneaker',
                productName: 'Nike Air Max 270 React',
                price: '$160',
                gender: 'Men',
                colors: ['black', 'purple']
            }
        ],
        filterMenuVisible: false
    };

    displayFilterMenu = () => {
        this.setState({
            filterMenuVisible: !this.state.filterMenuVisible
        }, () => {
            let productsContainer = document.querySelector('.products-container');
            this.state.filterMenuVisible === true ? 
            productsContainer.style.width = '90%' : 
            productsContainer.style.width = '100%';
        })
    }

    render(){
        return (
            <div className='ProductPage'>
                <div className='product-nav section-container'>
                    <div className='productPage-label label'>Products</div>
                    <div className='nav-options'>
                        <button onClick={this.displayFilterMenu} className='nav-option nav-filter'>Show Filters</button>
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
                <div className='products-filter-container'>
                    { this.state.filterMenuVisible === true ? <FilterMenu /> : null }
                    <div className='products-container'>
                        {this.state.products.map( product => <ProductTile 
                                                                type={product.productType}
                                                                name={product.productName}
                                                                gender={product.gender}
                                                                price={product.price}
                                                                colors={product.colors} /> )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;