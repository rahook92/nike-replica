import React from 'react';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Hero from '../Hero/Hero';
import MediaPanel from '../MediaPanel';
import kidsHero from '../../assets/images/kids-hero.webp';
import kidsHero2 from '../../assets/images/kids-hero-2.webp';
import kidsShoe from '../../assets/images/kids-airmax.webp';
import kidsSweats from '../../assets/images/kids-sweats.webp';
import kidsTees from '../../assets/images/kids-tees.webp';

const Kids = () => {
    return(
        <div className='Media-Page-Container'>
        <Hero image={kidsHero} heroText={{text: 'PLAY STARTS HERE', textColor: 'black', position: 'hero-top-left'}} />
        <ProductCarousel label='The Most Wanted Kicks' />
        <Hero image={kidsHero2} heroText={{text: 'REVIVAL COLLECTION', textColor: 'black', position: 'hero-top-left'}} />
        <MediaPanel 
            containerSize='med'
            label='More to Explore'
            images={[
                {
                    imageSrc: kidsShoe,
                    label: "Shoes $80 & Under"
                },
                {
                    imageSrc: kidsSweats,
                    label: "Sweatsuits"
                },
                {
                    imageSrc: kidsTees,
                    label: "Tees & Shorts"
                }
            ]} />
        </div>
    );
}

export default Kids;