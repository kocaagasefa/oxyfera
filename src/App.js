import React, { Component } from 'react';
import './App.css';
import Main from './components/Sections/Main/Main';
import {Route,Switch} from 'react-router';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import Products from './components/Sections/Products/Products';
import Contact from './components/Sections/Contact/Contact';
import Layout from './hoc/Layout/Layout';


class App extends Component {

  render() {
    const url=this.props.match.url;
    return (
      <div className="App">      
      <Layout home={url}>
        <Switch>
          <Route path={url+"/about"} exact component={AboutUs} />
          <Route path={url+"/products"} exact component={Products} />
          <Route path={url+"/contact"} exact component={Contact} />
          <Route path={url} exact component={Main} />
        </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
