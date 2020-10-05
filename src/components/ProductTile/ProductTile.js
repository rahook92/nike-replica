import React from 'react';
import sneakerTile from '../../assets/images/sneaker-tile.webp';
import { Link } from 'react-router-dom';

const productTile = (props) => {
    return(
        <div className='product-tile'>
            <Link to='/product-page'><img className='product-img' alt='meaningful text' src={sneakerTile} /></Link>
            <div className='product-info'>
                <Link to='/product-page' style={{color: 'black', textDecoration: 'none'}}><p className='product-name'>{ props.name }</p></Link>
                <p className='product-type'>{props.gender + "'s " + props.type}</p>
                <p className='product-colors'>{'' + props.colors.length + ' Colors'}</p>
                <p className='product-price'>{props.price}</p>
            </div>
        </div>        
    );
}

export default productTile;