import React, {Component} from 'react';
import './Layout.css';
import Aux from '../Auxer';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {    

    render () {
        return (
            <Aux>
                <NavBar />
                <main className="Content">
                    {this.props.children}
                </main>
                <Footer />
            </Aux>
        )
        
        
        ;
    }
}

export default Layout;