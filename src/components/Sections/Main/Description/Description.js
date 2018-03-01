import React from 'react';
import {Grid,Row,Col,Thumbnail,PageHeader,Well} from 'react-bootstrap';
import './Description.css';
import BarImage from '../../../../assets/images/Description/content1.jpeg';
import descriptionText from './descriptionText';

const description = () => (
    <div className="Description">
        
        <Grid >
                      
            <Row className="Description-TextArea">       
           
                <Col sm={6} md={3} smOffset={3} mdOffset={0}>
                    <Thumbnail src={BarImage}/>
                </Col>
                <Col sm={12} md={9} style={{height:"100%"}}>
                <h3 className="Description-Header"> Oksijen Bar Nedir? </h3>
                    <p className="Description-Text">{descriptionText}</p>
                </Col>
                </Row>
    
            
        </Grid>
    </div>
);

export default description;