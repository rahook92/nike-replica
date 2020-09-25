import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Men from './Men';

class Landing extends Component {

    state = {};

    render(){
        return (
            <div className='Landing-Page'>
                <Navbar />
                <Route path="/Men" exact component={Men} />
            </div>
        );
    }
}

export default Landing;