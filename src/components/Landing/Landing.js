import React from 'react';

const landing = () => {
    return (
        <div className='Landing'>
            <div className='section-container'>
                <p className='label'>Trending</p>
                <div className='image'>
                    <div className='promo-text'>
                        <p className='big'>STEP INTO NEW AIR</p>
                        <p className='small'>Featuring the Air Max 270 React</p>
                        <button>Shop</button>
                    </div>
                </div>            
            </div>
            <div className='section-container'>
                <div className='label-container'>
                    <p className='label'>Best of Air Max</p>
                    <a href='/'>Shop All</a>
                </div>
                <div className='sneaker-carousel'>
                    <div className='sneaker-tile'>
                        <div className='sneaker-img'>
                            <div className='arrow left'></div>
                        </div>
                        <div className='sneaker-info'>
                            <div className='name-price'>
                                <p>Nike Air Max 270 React</p>
                                <p className='price'>$160</p>
                            </div>
                            <p className='sub-label'>Men's Shoe</p>
                        </div>
                    </div>
                    <div className='sneaker-tile'>
                        <div className='sneaker-img'></div>
                        <div className='sneaker-info'>
                            <div className='name-price'>
                                <p>Nike Air Max 270 React</p>
                                <p className='price'>$160</p>
                            </div>
                            <p className='sub-label'>Women's Shoe</p>
                        </div>
                    </div>
                    <div className='sneaker-tile'>
                        <div className='sneaker-img'>
                            <div className='arrow right'></div>
                        </div>
                        <div className='sneaker-info'>
                            <div className='name-price'>
                                <p>Nike Air Max 270 React</p>
                                <p className='price'>$125</p>
                            </div>
                            <p className='sub-label'>Kid's Shoe</p>
                        </div>
                    </div>                                      
                </div>
            </div>
        </div>
    );
}

export default landing;