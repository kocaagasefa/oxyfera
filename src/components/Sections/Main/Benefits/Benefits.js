import React from 'react';
import './Benefits.css';
import {Grid,Row,Col} from 'react-bootstrap';
import benefitsData from './benefitsData';
import CollapsablePanel from './CollapsablePanel/CollapsablePanel';

const benefits = () => {
    const benefits = benefitsData.map((benefit,index) => (
        <CollapsablePanel key={index} benefit={benefit} />
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