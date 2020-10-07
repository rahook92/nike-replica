import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

const ProductCarousel = (props) => {
    return (
        <div className='section-container'>
            <div className='label-container'>
                <p className='label-lrg'>{props.label}</p>
                <a href='/product-page'>Shop All</a>
            </div>       
            <div className='product-carousel'>
                <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
            </div>
        </div> 
    );
}

export default ProductCarousel;