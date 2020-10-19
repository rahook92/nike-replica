import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swoosh from '../../assets/images/swoosh-logo.png';

class NavbarCollapsed extends Component {

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

    // displayDropdown = (event, page) => {

    //     if(event.target.classList.contains('NavLinks')){
    //         this.setState({
    //             dropdownVisibility: {
    //             isDropdownVisible: true,
    //             dropdownContent: page.categories
    //             }
    //         });
    //     } else {
    //         this.setState({
    //             dropdownVisibility: {
    //             isDropdownVisible: true,
    //             dropdownContent: this.state.dropdownVisibility.dropdownContent
    //             }
    //         });            
    //     }
    // };

    // hideDropdown = () => {
    //     this.setState({
    //         dropdownVisibility: {
    //             isDropdownVisible: false
    //         }
    //     });
    // }

    render(){
        return (
            <nav className='Navbar-collapsed'>
                <Link className='logo-link' to='/'><img className='Logo' src={swoosh} alt='logo'/></Link>
                <div className='Nav-Icons'>
                    <svg className='Shopping-Bag-Icon' width="37px" height="28px" fill="#111" viewBox="0 0 24 24">
                        <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                        <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
                    </svg>
                    <svg fill="#111" height="26px" width="26px" viewBox="0 0 24 24">
                        <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"></path>
                    </svg>
                    <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                        <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z">
                        </path>
                    </svg>
                </div>
            </nav>
        );
    }
}

export default NavbarCollapsed;