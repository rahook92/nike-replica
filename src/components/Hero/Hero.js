import React from 'react';
import { Link } from 'react-router-dom';

const Hero = (props) => {
    return (
        <Link className='Links' to='/product-page'>
        <div className='section-container'>
            { props.label ? <p className='label-lrg'>{props.label}</p> : null }      
            <div className='hero-image-container'>
                <img src={props.image} alt='sneaker hero' />
                <div className={'promo-text ' + props.heroText.position + ''}>
                    <p className='big' style={{color: props.heroText.textColor}}>{props.heroText.text}</p>
                    <button className='shop-btn'>Shop</button>
                </div>
            </div>
        </div>
        </Link>        
    );
}

export default Hero;