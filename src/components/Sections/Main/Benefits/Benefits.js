import React from 'react';
import './Benefits.css';
import {Grid,Row,Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import benefitsData from './benefitsData';

const benefits = () => {
    const benefits = benefitsData.map((benefit,index) => (
        <Col key={index} sm={6} xs={12} className="Benefit">
            <FontAwesome className="Benefit-Icon" size="7x" name={benefit.iconName} />
            <p className="Benefit-Text"><b>{benefit.bold}:</b> {benefit.text}</p>
        </Col>
    ));
    return (
    <div className="Benefits">
        <Grid>
            <Row>
                <Col>
                    <h3 className="Benefits-Header">Oksijen Terapisinin Faydaları</h3>
                    <hr className="Benefits-Header-Hr"/>
                </Col>
            </Row>
            <Row>
                {benefits}
            </Row>
        </Grid>
    </div>
)};

export default benefits;