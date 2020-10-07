import React from 'react';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Hero from '../Hero/Hero';
import MediaPanel from '../MediaPanel';
import camoModel from '../../assets/images/camo-model.webp';
import backpack from '../../assets/images/backpack.webp';
import lowTops from '../../assets/images/low-top-nikes.webp';
import maleModel2 from '../../assets/images/product-model-male-2.webp';
import maleModel3 from '../../assets/images/product-model-male-3.webp';
import sneakerProduct from '../../assets/images/sneaker-product.webp';
import maleModel4 from '../../assets/images/product-model-male-4.webp';
import AFCarhartt from '../../assets/images/AF-Carhartt.jpg';

const Men = () => {
    return (
        <div className='Media-Page-Container'>
            <Hero image={AFCarhartt} heroText={{text: 'SHOP OUR RECENT COLLABS', textColor: 'white', position: 'hero-bottom-left'}} />
            <MediaPanel 
                containerSize='lrg'
                label='Featured'
                images={[ 
                    {   
                        imageSrc: sneakerProduct, 
                        overlayItems:   <div className='bottom-left'> 
                                            <p style={{ color: 'white' }}>New For Fall &amp; Beyond</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }, 
                    {   
                        imageSrc: maleModel4, 
                        overlayItems:   <div className='bottom-left'> 
                                            <p style={{ color: 'black' }}>Layers Bring That Heat</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }   
                ]} />
            <ProductCarousel label='This Weeks Most Wanted' />
            <MediaPanel 
                containerSize='lrg'
                label='Trending'
                images={[ 
                    {   
                        imageSrc: maleModel2, 
                        overlayItems:   <div className='top-left'> 
                                            <p style={{ color: 'white' }}>The Latest Air Max Colors</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }, 
                    {   
                        imageSrc: maleModel3, 
                        overlayItems:   <div className='top-left'> 
                                            <p style={{ color: 'black' }}>Training Gear For Fall</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }   
                ]} />
            <MediaPanel 
                containerSize='med'
                label='More to Explore'
                images={[
                    {
                        imageSrc: camoModel,
                        label: "Camo"
                    },
                    {
                        imageSrc: backpack,
                        label: "Bags & Backpacks"
                    },
                    {
                        imageSrc: lowTops,
                        label: "New Releases"
                    }
                ]} />
        </div>
    );
}

export default Men;