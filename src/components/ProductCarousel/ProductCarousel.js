import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

const ProductCarousel = () => {
    return (
        <div className='product-carousel'>
            <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
            <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
            <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
            <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
            <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
        </div>
    );
}

export default ProductCarousel;