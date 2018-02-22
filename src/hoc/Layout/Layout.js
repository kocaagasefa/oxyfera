import React, {Component} from 'react';
import './Layout.css';
import Aux from '../Aux';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {    

    render () {
        return (
            <Aux>
                <NavBar home={this.props.home}/>
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