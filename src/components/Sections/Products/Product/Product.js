import React from 'react';
import {Thumbnail} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './Product.css';

const product = (props) =>(
<div className="Product"> 
                    <Thumbnail src={props.product.image}>
                        <hr />
                        <h3><FontAwesome name="chevron-circle-right"/> {props.product.name}</h3>
                    </Thumbnail>

                    <ul className="Specs">
                            {
                                props.product.specs.map((spec,index)=>(
                                    <li key={index} className="Product-List-Item"><FontAwesome name="arrow-alt-circle-right" /> {spec}</li>
                                ))
                            }

					</ul>
    </div>
) ;

export default product;