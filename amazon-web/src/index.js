import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './Redux/Reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// const  store =createStore(contactReducer)
ReactDOM.render(

<BrowserRouter>
    <App />
</BrowserRouter>
,document.getElementById('root'));

 