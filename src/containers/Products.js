import React, {Component} from 'react';
import ProductTile from '../components/ProductTile/ProductTile';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import ProductsNav from '../components/ProductsNav/ProductsNav';
import ProductsNavCollapsed from '../components/ProductsNav/ProductsNavCollapsed';
import PrimaryFilter from '../components/FilterMenu/PrimaryFilter/PrimaryFilter';

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
        filterMenuVisible: false,
        height: window.innerHeight,
        width: window.innerWidth
    };

    componentDidMount(){
        let handleResize = () => {
            this.setState({
                products: [...this.state.products],
                filterMenuVisible: false,
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize);
    }

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

    primaryFilters = ['Option', 'Option', 'Option', 'Option'];

    render(){
        return (
            <div className='ProductPage'>

                { this.state.width > 1000 ? 
                    <ProductsNav 
                        areFiltersVisible={this.state.filterMenuVisible} 
                        displayFilterMenu={this.displayFilterMenu} /> :
                    <React.Fragment>
                        <ProductsNavCollapsed displayFilterMenu={this.displayFilterMenu} />
                        <div className='primary-filters'>
                            <PrimaryFilter content={this.primaryFilters} />
                        </div> 
                    </React.Fragment>
                }

                <div className='products-filter-container'>
                    { this.state.filterMenuVisible === true ? <FilterMenu displayFilterMenu={this.displayFilterMenu} windowWidth={this.state.width} /> : null }
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