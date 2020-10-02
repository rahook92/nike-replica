import React from 'react';

const productTile = (props) => {
    return(
        <div className='product-tile'>
            <div className='product-img'></div>
            <div className='product-info'>
                <p>{ props.name }</p>
                <p className='product-type'>{props.gender + "'s " + props.type}</p>
                <p className='product-colors'>{'' + props.colors.length + ' Colors'}</p>
                <p className='product-price'>{props.price}</p>
            </div>
        </div>        
    );
}

export default productTile;