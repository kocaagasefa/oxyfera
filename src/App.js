import React, { Component } from 'react';
import './App.css';
import Main from './components/Sections/Main/Main';
import {Route,Switch,Redirect} from 'react-router';
import AboutUs from './components/Sections/AboutUs/AboutUs';
import Products from './components/Sections/Products/Products';
import Contact from './components/Sections/Contact/Contact';
import Layout from './hoc/Layout/Layout';


class App extends Component {
  componentDidUpdate(prevProps){
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return (
      <div className="App">      
      <Layout>
        <Switch>
          <Route path="/about" exact component={AboutUs} />
          <Route path="/products" component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Main} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
      </div>
    );
  }
}

export default App;
