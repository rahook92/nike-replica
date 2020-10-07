import React from 'react';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Hero from '../Hero/Hero';
import MediaPanel from '../MediaPanel';
import femaleBasketball from '../../assets/images/female-basketball-hero.webp';
import femaleRollerskates from '../../assets/images/female-rollerskates.webp';
import whiteSneaks from '../../assets/images/female-white-sneakers.webp';
import femaleLifestyle from '../../assets/images/female-lifestyle.webp';
import femaleRunning from '../../assets/images/female-running.webp';
import femaleYoga from '../../assets/images/female-yoga.webp';

const Women = () => {
    return (
        <div className='Media-Page-Container'>
            <Hero image={femaleBasketball} heroText={{text: 'STYLE TO MAKE YOUR OWN', textColor: 'white' ,position: 'hero-top-left'}} />
            <ProductCarousel label='Trending Styles in New York City' />
            <MediaPanel 
                containerSize='lrg'
                label='Now Trending'
                images={[ 
                    {   
                        imageSrc: whiteSneaks, 
                        overlayItems:   <div className='top-left'> 
                                            <p style={{ color: 'white' }}>New &amp; Classic Blazer Colors</p>
                                            <button style={{backgroundColor: 'white', color: 'black'}} className='shop-btn'>Shop</button>
                                        </div>
                    }, 
                    {   
                        imageSrc: femaleRollerskates, 
                        overlayItems:   <div className='top-left'> 
                                            <p style={{ color: 'black' }}>Fall Florals to Mix &amp; Match</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }   
                ]} />
            <MediaPanel 
                containerSize='med'
                label='More to Explore'
                images={[
                    {
                        imageSrc: femaleLifestyle,
                        label: "Lifestyle"
                    },
                    {
                        imageSrc: femaleYoga,
                        label: "Yoga"
                    },
                    {
                        imageSrc: femaleRunning,
                        label: "Performance"
                    }
                ]} />
        </div>
    );
}

export default Women;