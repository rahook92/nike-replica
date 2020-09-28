import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import NewRel from './NewReleases';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Customize from './Customize';
import Sale from './Sale';

class Landing extends Component {

    state = {};

    render(){
        return (
            <div className='Landing-Page'>
                <Navbar />
                <Route path="/New-Releases" exact component={NewRel} />
                <Route path="/Men" exact component={Men} />
                <Route path="/Women" exact component={Women} />
                <Route path="/Kids" exact component={Kids} />
                <Route path="/Customize" exact component={Customize} />
                <Route path="/Sale" exact component={Sale} />
            </div>
        );
    }
}

export default Landing;