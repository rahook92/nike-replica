import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import swoosh from '../../assets/images/swoosh-logo.png';

class Navbar extends Component {

    state = {
        pages: [
            {
                pageName: 'New-Releases',
                categories: {
                    "New & Featured" : ['Shop All New Arrivals', 'SNKRS Launch Calendar', 'Best of Air Max Shoes', 'Fall Essentials'],
                    "New For Men" : ['Shoes', 'Clothing', 'Equpiment', 'Shop All New'],
                    "New For Women" : ['Shoes', 'Clothing', 'Equpiment', 'Shop All New'],
                    "New For Kids" : ['Boys Shoes', 'Boys Clothing', 'Girls Shoes', 'Girls Clothing', 'Shop All New']
                }
            },
            {
                pageName: 'Men',
                categories: {
                    "New & Featured" : ["Best Sellers", "Best of Air Max", "Fall Must Haves", "New Nike Underwear", "High Intensity", "Sale"],
                    "Shoes" : ["Lifestyle", "Running", "Basketball", "Jordan", "Training & Gym", "Soccer", "Golf", "Track & Field", "Skateboarding", "Tennis", "Baseball", "All Shoes"],
                    "Clothing" : ["Tops & T-Shirts", "Shorts", "Hoodies & Sweatshirts", "Pants & Tights", "Jackets & Vests", "Swimwear", "Polos", "Polos", "Nike Pro", "Yoga", "Socks & Underwear", "All Clothing"],
                    "Shop Collection" : ["Golf", "Jordan", "Soccer", "Running", "Basketball", "Tennis", "NikeLab", "Training & Gym", "Football", "Baseball", "Nike Sportswear", "Skateboarding", "Lacrosse"]
                }
            },
            {
                pageName: 'Women',
                categories: {
                    "New & Featured" : ["New Releases", "Best Sellers", "Best Of Air Max Shoes", "Fall Style Guide", "Nike Maternity", "Sale"],
                    "Shoes" : ["Lifestyle", "Running", "Basketball", "Jordan", "Training & Gym", "Soccer", "Golf", "Track & Field", "Skateboarding", "Tennis", "Softball", "All Shoes"],
                    "Clothing": ["Pants & Leggins", "Sports Bras", "Tops & T-Shirts", "Shorts", "Hoodies & Sweatshirts", "Jackets & Vests", "Swimwear", "Nike Pro", "Plus Size", "Nike Maternity", "Yoga", "All Clothing"],
                    "Shop Collection": ["Golf", "Jordan", "Soccer", "Running", "Basketball", "Tennis", "NikeLab", "Training & Gym", "Football", "Softball", "Nike Sportswear", "Skateboarding", "Lacrosse"]
                }
            },
            {
                pageName: 'Kids',
                categories: {
                    "New & Featured" : ["New Releases", "Best Sellers", "Best Of Air Max Shoes", "Fall Favorites", "Gear Up For Sport", "Sale"],
                    "Boys Shoes" : ["Big Kids (3.5Y - 7Y)", "Little Kids (10.5C -3Y)", "Baby & Toddler (0C -10C)", "Lifestyle", "Running", "Basketball", "All Shoes"],
                    "Girls Shoes" : ["Big Kids (3.5Y - 7Y)", "Little Kids (10.5C -3Y)", "Baby & Toddler (0C -10C)", "Lifestyle", "Running", "Basketball", "All Shoes"],
                    "Baby & Toddler" : ["Baby Girl", "Baby Boy", "All Shoes", "All Shoes", "All Baby Shoes", "All Clothing", "Baby Box Sets", "All Shoes (0C - 10C)", "Boys Clothing (0M - 4T)", "Girls Clothing (0M - 4T)"],
                    "Boys Clothing": ["Big Kids (XS - XL)", "Little Kids (4-7)", "Baby & Toddler (0M -4T)", "Hoodies & Sweatshirts", "Pants & Tights", "Jackets", "Tops & T-Shirts", "Nike Pro & Baselayer", "Shorts", "All Clothing"],
                    "Girls Clothing" : ["Big Kids (XS - XL)", "Little Kids (4-7)", "Baby & Toddler (0M -4T)", "Hoodies & Sweatshirts", "Pants & Tights", "Jackets", "Tops & T-Shirts", "Sports Bras", "Shorts", "All Clothing"],
                    "Accessories & Equipment" : ["Bags & Backpacks", "Hats", "Socks"],
                    "Shop Collection" : ["Rep Your City", "Nike Adventure Club", "Sandals & Slides", "Surf & Swimwear"]
                }
            },
            {
                pageName: 'Sale',
                categories: {
                    "Sale - Up To 40% Off" : [],
                    "Mens Sale" : ["Shoes", "Clothing", "Equipment"],
                    "Womens Sale" : ["Shoes", "Clothing", "Equipment"],
                    "Kids Sale" : ["Shoes", "Clothing", "Equipment"]
                }
            }           
        ],
        dropdownVisibility: {
            isDropdownVisible: false,
            dropdownContent: null
        }
    }

    displayDropdown = (event, page) => {

        if(event.target.classList.contains('NavLinks')){
            this.setState({
                dropdownVisibility: {
                isDropdownVisible: true,
                dropdownContent: page.categories
                }
            });
        } else {
            this.setState({
                dropdownVisibility: {
                isDropdownVisible: true,
                dropdownContent: this.state.dropdownVisibility.dropdownContent
                }
            });            
        }
    };

    hideDropdown = () => {
        this.setState({
            dropdownVisibility: {
                isDropdownVisible: false
            }
        });
    }

    render(){
        return (
            <React.Fragment>
                <nav className='Navbar'>
                    <Link className='logo-link' to='/'><img className='Logo' src={swoosh} alt='logo'/></Link>
                    <div className='Link-List'>
                        { this.state.pages.map( page => <Link
                                                key={page.pageName} 
                                                className='NavLinks' 
                                                onMouseEnter={(e, p) => { this.displayDropdown(e, page) }} 
                                                onMouseLeave={this.hideDropdown} 
                                                to={'/' + page.pageName}> {page.pageName} </Link> )}
                    </div>
                    <div className='Search-Div'>
                        <button className='Search-Button'>
                            <svg fill="#111" height="37px" width="28px" viewBox="0 0 24 24">
                                <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                            </svg>
                        </button>
                        <input className='Search-Input' type='text' placeholder='search' />
                    </div>
                    <div className='Nav-Icons'>
                        <svg className='Favorite-Icon' width="28px" height="28px" fill="#111" viewBox="0 0 24 24">
                            <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z">
                            </path>
                        </svg>
                        <svg className='Shopping-Bag-Icon' width="28px" height="28px" fill="#111" viewBox="0 0 24 24">
                            <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                            <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                        </svg>
                    </div>
                </nav>
                {
                    this.state.dropdownVisibility.isDropdownVisible === true ? 
                    <Dropdown 
                        className='Dropdown'
                        dropDisplay={this.displayDropdown} 
                        dropHide={this.hideDropdown} 
                        data={this.state.dropdownVisibility.dropdownContent} /> : 
                    null }
            </React.Fragment>
        );
    }
}

export default Navbar;