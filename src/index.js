import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';

import './style.css';

import PageReducer from "./modules/Redux";
// import {App} from "./modules/Redux";
import App from "./pages/simple";



const store = createStore(PageReducer);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={App}/>
        </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root'));
