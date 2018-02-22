import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import OnConstruction from './components/OnConstruction/OnConstruction';
const Dev = props => (
    <Switch>
        <Route path="/dev" component={App} />
        <Route path="/" exact component={OnConstruction} />
    </Switch>
);

const app = (
    <BrowserRouter>
        <Dev />
    </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

