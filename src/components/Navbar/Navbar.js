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
                    "Clothing" : ["Tops & T-Shirts", "Shorts", "Hoodies & Sweatshirts", "Pants & Tights", "Jackets & Vests", "Swimwear", "Polos", "Polos", "Nike Pro", "Yoga", "Socks & Underwear", "All Clothing"]
                }
            },
            {
                pageName: 'Women',
                categories: []
            },
            {
                pageName: 'Kids',
                categories: []
            },
            {
                pageName: 'Customize',
                categories: []
            },
            {
                pageName: 'Sale',
                categories: []
            }           
        ],
        dropdownVisibility: {
            isDropdownVisible: false,
            dropdownContent: null
        }
    }

    displayDropdown = (event, page) => {

        this.setState({
            dropdownVisibility: {
            isDropdownVisible: true,
            dropdownContent: page.categories
            }
        });
        // let dropdown = document.querySelector('.Dropdown');
        // // reveal drop-down menu
        // dropdown.style.animation = 'expand .1s forwards';
        // dropdown.classList.add('isVisible');
        // //populate drop-down with data
        // this.populateDropdown(page.categories);
    };

    hideDropdown = () => {
        this.setState({
            dropdownVisibility: {
                isDropdownVisible: false,
                dropdownContent: null
            }
        });
        // let dropdown = document.querySelector('.Dropdown');

        // dropdown.style.animation = "contract .1s linear";
        // dropdown.classList.remove('isVisible');
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
                    <Dropdown className='Dropdown' data={this.state.dropdownVisibility.dropdownContent} /> : 
                    null }
            </React.Fragment>
        );
    }
}

export default Navbar;