import React from 'react';
import './Products.css';
import {Route,Switch} from 'react-router-dom';
import Product from './Product/Product';
import productsData from './productsData';


const products = props => (
    <div className="Products"> 
    <Switch>
        <Route path={props.match.url+"/single"} component={()=><Product product={productsData[0]}/>} />
        <Route path={props.match.url+"/double"} component={()=><Product product={productsData[1]}/>} />        
        <Route path={props.match.url+"/four"} component={()=><Product product={productsData[2]}/>} />        
    </Switch>
    </div>
);

export default products;