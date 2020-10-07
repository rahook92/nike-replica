import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Landing from '../components/Landing/Landing';
import Men from '../components/Men/Men';
import Women from '../components/Women/Women';
import Kids from '../components/Kids/Kids';
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
                <Route path="/New-Releases" exact component={Products} />
                <Route path="/Men" exact component={Men} />
                <Route path="/Women" exact component={Women} />
                <Route path="/Kids" exact component={Kids} />
                <Route path="/Sale" exact component={Products} />
                <Route path="/Products" exact component={Products} />
                <Route path="/product-page" exact component={ProductPage} />
                <Footer />
            </div>
        );
    }
}

export default Home;