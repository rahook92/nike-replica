import React from 'react';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Hero from '../Hero/Hero';
import MediaPanel from '../MediaPanel';
import sneaker1 from '../../assets/images/sneaker-hero.jpg';
import jordanModel from '../../assets/images/jordan-female-model.jpg';
import escalatorModel from '../../assets/images/escalator-model.jpg';
import womanProductModel from '../../assets/images/product-female-model.webp';
import maleModel1 from '../../assets/images/product-model-male.webp';
import kidModel from '../../assets/images/product-model-kid.webp';

const Landing = () => {

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
        <div className='Media-Page-Container'>
            <Hero image={sneaker1} label='Trending' heroText={{text: 'STEP INTO NEW AIR', textColor: 'black', position: 'hero-bottom-left'}} />    
            <ProductCarousel label='The Best of Air-Max' />
            <MediaPanel
                containerSize='lrg' 
                label='Featured'
                images={[ 
                    {   
                        imageSrc: escalatorModel, 
                        overlayItems:   <div className='top-left'> 
                                            <p style={{ color: 'white' }}>Style with Confidence</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }, 
                    {   
                        imageSrc: jordanModel, 
                        overlayItems:   <div className='top-left'> 
                                            <p style={{ color: 'black' }}>Explore Jordans</p>
                                            <button className='shop-btn'>Shop</button>
                                        </div>
                    }   
                ]} />
            <MediaPanel 
                containerSize='med'
                label='New Releases'
                images={[
                    {
                        imageSrc: womanProductModel,
                        label: "Women's"
                    },
                    {
                        imageSrc: maleModel1,
                        label: "Men's"
                    },
                    {
                        imageSrc: kidModel,
                        label: "Kid's"
                    }
                ]} />
        </div>
    );
}

export default Landing;