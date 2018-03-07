import React, {Component} from 'react';
import {Grid,Row,Col,Alert} from 'react-bootstrap';
import ContactForm from './ContactForm/ContactForm.js';
import GoogleMaps from './GoogleMaps/GoogleMapsContainer';
import Address from './Address/Address';
import TweenLite from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';

import './Contact.css';

class Contact extends Component{
    state={
        showAlert:false,
        alertType:null
    }
    handleShowAlert=(alertType)=>{
        this.setState({showAlert:true,alertType:alertType});
        TweenLite.to(window, .8, {scrollTo:0});
    }

    render() {
        return (
            <div  className="Contact"> 
              
                <Grid>
                    {
                        this.state.showAlert?
                        <Col>
                            <Alert bsStyle={this.state.alertType} style={{margin:"10px auto"}} >{this.state.alertType==="success"?"Mesajınız başarıyla gönderildi.":"Hata! Lütfen tekrar deneyiniz"}</Alert> 
                        </Col>:
                        null
                    }
                    <Row>
                        
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <Address />
                        </Col>
                        <Col sm={6} >
                            <ContactForm showAlert={this.handleShowAlert}/>
                        </Col>
                    </Row>            
                    <Row>
                        <Col >
                            <GoogleMaps />
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}



export default Contact;