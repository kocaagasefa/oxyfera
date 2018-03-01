import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import ContactForm from './ContactForm/ContactForm.js';
import GoogleMaps from './GoogleMaps/GoogleMapsContainer';

const contact = props => (
    <div className="Main" >
        <Grid>            
            <Row>
                <Col sm={6} >
                    <ContactForm />
                </Col>
                <Col sm={6} >
                    <GoogleMaps />
                </Col>
            </Row>
        </Grid>
        
    </div>
);

export default contact;