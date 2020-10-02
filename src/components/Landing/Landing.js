import React from 'react';
import ProductTile from '../ProductTile/ProductTile';

const landing = () => {

    // const slider = () => {
    //     let sneakerTiles = Array.from(document.querySelectorAll('.sneaker-tile'));

    //     sneakerTiles.map( tile => {
    //         if(tile.style.animation === ''){
    //             tile.style.animation = 'slide-left .75s forwards';
    //         } else {
    //             console.log('now what?')
    //         }
    //         });
    // }

    return (
        <div className='Landing'>
            <div className='section-container'>
                <p className='label'>Trending</p>
                <div className='promo-image'>
                    <div className='promo-text'>
                        <p className='big'>STEP INTO NEW AIR</p>
                        <p className='small'>Featuring the Air Max 270 React</p>
                        <button className='shop-btn'>Shop</button>
                    </div>
                </div>            
            </div>
            <div className='section-container'>
                <div className='label-container'>
                    <p className='label'>Best of Air Max</p>
                    <a href='/'>Shop All</a>
                </div>
                <div className='sneaker-carousel'>
                    <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                    <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                    <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                    <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                    <ProductTile type='Sneaker' name='Nike Air Max 270 React' gender='Men' price='$240' colors={['red', 'yellow']} />
                </div>
            </div>
            <div className='section-container'>
                <p className='label'>Featured</p>
                <div className='image-container'>
                    <div className='feat-image image-left'>
                        <p>Style with Confidence</p>
                        <button className='shop-btn'>Shop</button>
                    </div>
                    <div className='feat-image image-right'>
                        <p>Explore Jordans</p>
                        <button className='shop-btn'>Shop</button>
                    </div>
                </div>
            </div>
            <div className='section-container'>
                <p className='label'>Fall Must Haves</p>
                <div className='image-container'>
                    <div>
                        <div id='left' className='fall-image'></div>
                        <p className='bottom-label'>Men's</p>
                    </div>
                    <div>
                        <div id='center' className='fall-image'></div>
                        <p className='bottom-label'>Women's</p>
                    </div>
                    <div>
                        <div id='right' className='fall-image'></div>
                        <p className='bottom-label'>Kid's</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default landing;