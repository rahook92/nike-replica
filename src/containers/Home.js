import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Landing from '../components/Landing/Landing';
import Products from './Products';
import ProductPage from './ProductPage';
import Footer from '../components/Footer/Footer';

class Home extends Component {

    state = {};

    render(){
        return (
            <div className='Home-Page'>
                <Navbar />
                <Route path='/' exact component={Landing} />
                <Route path="/New-Releases" exact component={Landing} />
                <Route path="/Men" exact component={Landing} />
                <Route path="/Women" exact component={Landing} />
                <Route path="/Kids" exact component={Landing} />
                <Route path="/Customize" exact component={Landing} />
                <Route path="/Sale" exact component={Landing} />
                <Route path="/Products" exact component={Products} />
                <Route path="/product-page" exact component={ProductPage} />
                <Footer />
            </div>
        );
    }
}

export default Home;