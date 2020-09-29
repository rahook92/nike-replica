import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

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
                pageName: 'Customize',
                categories: {
                    "New & Featured" : ["Customize With Nike By You", "Nike By You New Releases", "Basketball By You", "Blazer By You", "Air Max By You"],
                    "Mens" : ["Basketball", "Lifestyle", "Football", "Running", "Training & Gym", "Soccer", "Baseball", "Skateboarding"],
                    "Womens" : ["Lifestyle", "Running", "Training & Gym", "Basketball", "Soccer", "Softball", "Skateboarding"]
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

        console.log(event.target);

        if(event.target.classList.contains('Links')){
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
                    <Link className='Links' to='/'><img className='Logo' alt='logo'/></Link>
                    <div className='Link-List'>
                        { this.state.pages.map( page => <Link
                                                key={page.pageName} 
                                                className='Links' 
                                                onMouseEnter={(e, p) => { this.displayDropdown(e, page) }} 
                                                onMouseLeave={this.hideDropdown} 
                                                to={'/' + page.pageName}> {page.pageName} </Link> )}
                    </div>
                    <div className='Search-Bar'></div>
                    <div className='Nav-Icons'>
                        <div className='Favorite-Icon'></div>
                        <div className='Shopping-Bag-Icon'></div>
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