import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import NavbarCollapsed from '../components/Navbar/NavbarCollapsed';
import Landing from '../components/Landing/Landing';
import Men from '../components/Men/Men';
import Women from '../components/Women/Women';
import Kids from '../components/Kids/Kids';
import Products from './Products';
import ProductPage from './ProductPage';
import Footer from '../components/Footer/Footer';
// import { connect } from 'react-redux';

class Home extends Component {

    state = {
        height: window.innerHeight,
        width: window.innerWidth
    };

    componentDidMount(){
        let handleResize = () => {
            this.setState({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    }

    render(){

        // console.log(this.props.defaultState);

        return (
            <div className='Home-Page'>
                { this.state.width > 1000 ? <Navbar /> : <NavbarCollapsed /> }
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

// const mapStateToProps = state => {
//     return {
//         defaultState: state.one
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onChangeState: () => dispatch({type: 'INCREMENT'})
//     }
// }

export default Home;

// export default connect(mapStateToProps, mapDispatchToProps)(Home);