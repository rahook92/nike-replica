import React from 'react';

const footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-section-container'>
                    <div className='footer-section'>
                        <p className='bold'>GIFT CARDS</p>
                        <p className='bold'>PROMOTIONS</p>
                        <p className='bold'>FIND A STORE</p>
                        <p className='bold'>SIGN UP FOR EMAIL</p>
                        <p className='bold'>BECOME A MEMBER</p>
                        <p className='bold'>NIKE JOURNEY</p>
                        <p className='bold'>SEND US FEEDBACK</p>
                    </div>
                    <div className='footer-section'>
                        <p className='bold'>GET HELP</p>
                        <p>Order Status</p>
                        <p>Shipping and Delivery</p>
                        <p>Returns</p>
                        <p>Payment Options</p>
                        <p>Gift Card Balance</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='footer-section'>
                        <p className='bold'>ABOUT NIKE</p>
                        <p>News</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Purpose</p>
                        <p>Sustainability</p>
                        <p>CA Supply Chains Act</p>                
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