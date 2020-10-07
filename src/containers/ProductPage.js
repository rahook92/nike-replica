import React, {Component} from 'react';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import sneaker3 from '../assets/images/sneaker-3.jpg';
import sneaker4 from '../assets/images/sneaker-4.webp';
import sneaker5 from '../assets/images/sneaker-5.jpg';
import sneaker6 from '../assets/images/sneaker-6.jpg';
import sneaker7 from '../assets/images/sneaker-7.jpg';
import sneaker8 from '../assets/images/sneaker-8.webp';
import sneaker9 from '../assets/images/sneaker-9.jpg';
import sneaker10 from '../assets/images/sneaker-10.jpg';

class ProductPage extends Component {

render(){
        return(
            <div className='Product-page'>
                <div className='product-snapshots-container'>
                    <div className='product-snapshots'>
                        <img className='snapshot' alt='sneaker-img' src={sneaker3} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker4} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker5} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker6} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker7} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker8} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker9} />
                        <img className='snapshot' alt='sneaker-img' src={sneaker10} />
                    </div>
                </div>
                <div className='product-options-container'>
                    <div className='product-header-container'>
                        <div className='product-type'>Men's Running Shoe <span className='product-header-price'>$163</span></div>
                        <div className='product-header'>Nike React Phantom Run Flyknit 2</div>
                    </div>
                    <div className='product-sizing-container'>
                        <div className='product-sizing-labels'><span className='select-size'>Select Size</span><span className='size-guide'>Size Guide</span></div>
                        <div className='product-sizing-buttons-container'>
                            <button className='product-size-btn'>6</button>
                            <button className='product-size-btn'>6.5</button>
                            <button className='product-size-btn'>7</button>
                            <button className='product-size-btn'>7.5</button>
                            <button className='product-size-btn'>8</button>
                            <button className='product-size-btn'>8.5</button>
                            <button className='product-size-btn'>9</button>
                            <button className='product-size-btn'>9.5</button>
                            <button className='product-size-btn'>10</button>
                            <button className='product-size-btn'>10.5</button>
                            <button className='product-size-btn'>11</button>
                            <button className='product-size-btn'>11.5</button>
                            <button className='product-size-btn'>12</button>
                            <button className='product-size-btn'>12.5</button>
                            <button className='product-size-btn'>13</button>
                            <button className='product-size-btn'>14</button>
                            <button className='product-size-btn'>15</button>
                        </div>
                    </div>
                    <div className='product-save-buttons-container'>
                        <button className='add-to-bag'>Add to Bag</button>
                        <button className='favorite'>Favorite</button>
                    </div>
                    <div className='product-description'>
                        Inspired by the vibrant energy and sights that take place 
                        during a color run, the Nike React Phantom Run Flyknit 2 brings 
                        those electrifying feels to your feet. Building on the foundation 
                        of its predecessor, the shoe expands on its laceless design by 
                        adding secure support that feels like it "disappears" on your foot. 
                        More foam means better cushioning, keeping you comfortable as you run.
                    </div>
                    <ul>
                        <li>Shown: Heather Grey</li>
                        <li>Style: CW1777-008</li>
                    </ul>
                    <div className='shipping-returns-container'>
                        <p className='shipping-returns'>Free Shipping &amp; Returns</p>
                        <p>Free standard shipping and free 60-day returns for Nike Members.</p>
                        <p className='learn'>Learn More</p>
                    </div>
                </div>
                <div className='you-might-like'>YOU MIGHT ALSO LIKE</div>
                <div className='carousel-container'>
                <ProductCarousel />
                </div>
            </div>
        );
    }
}

export default ProductPage;