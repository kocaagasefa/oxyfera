import React from 'react';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import './Description.css';
import BarImage from '../../../../assets/images/Description/bar.jpg';

const description = () => (
    <div className="Description">
        <h3> Oksijen Bar Nedir? </h3>
        <Grid >
            <Row className="Description-TextArea">                
                <Col sm={12} md={4} >
                    <Thumbnail src={BarImage} />
                </Col>
                <Col sm={12} md={8}>
                    <p className="Description-Text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </Col>

            </Row>
        </Grid>
    </div>
);

export default description;