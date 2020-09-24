import React, {Component} from 'react';

class Landing extends Component {
    render(){
        return (
            <div className='Landing-Page'>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>New Releases</a></li>
                            <li><a href='/'>Men</a></li>
                            <li><a href='/'>Women</a></li>
                            <li><a href='/'>Kids</a></li>
                            <li><a href='/'>Customize</a></li>
                            <li><a href='/'>Sale</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Landing;