import React from 'react';

const footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-section-container'>
                    <div className='footer-section'>
                        <a href='/' className='bold'>GIFT CARDS</a>
                        <a href='/' className='bold'>PROMOTIONS</a>
                        <a href='/' className='bold'>FIND A STORE</a>
                        <a href='/' className='bold'>SIGN UP FOR EMAIL</a>
                        <a href='/' className='bold'>BECOME A MEMBER</a>
                        <a href='/' className='bold'>NIKE JOURNEY</a>
                        <a href='/' className='bold'>SEND US FEEDBACK</a>
                    </div>
                    <div className='footer-section'>
                        <a href='/' className='bold'>GET HELP</a>
                        <a href='/'>Order Status</a>
                        <a href='/'>Shipping and Delivery</a>
                        <a href='/'>Returns</a>
                        <a href='/'>Payment Options</a>
                        <a href='/'>Gift Card Balance</a>
                        <a href='/'>Contact Us</a>
                    </div>
                    <div className='footer-section'>
                        <a href='/' className='bold'>ABOUT NIKE</a>
                        <a href='/'>News</a>
                        <a href='/'>Careers</a>
                        <a href='/'>Investors</a>
                        <a href='/'>Purpose</a>
                        <a href='/'>Sustainability</a>
                        <a href='/'>CA Supply Chains Act</a>                
                    </div>
                </div>
                <ul className='social-links'>
                    <li className='social-link'></li>
                    <li className='social-link'></li>
                    <li className='social-link'></li>
                    <li className='social-link'></li>
                </ul>
            </div>
            <div className='border'></div> 
            <div className='fine-print-container'>
                <div className='fine-print-left'>
                    <p className='location'>United States</p>
                    <p className='trademark'>2020 Nike, Inc. All Rights Reserved</p>                
                </div>
                <div className='fine-print-right'>
                    <a href='/'>Guides</a>
                    <a href='/'>Terms of Sale</a>
                    <a href='/'>Terms of Use</a>
                    <a href='/'>Nike Privacy Policy</a>
                </div>
            </div>                      
        </div>
    );
}

export default footer;