import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";// to see the change in redux-dev-tools while inspect
import store from './redux/store';
ReactDOM.render(<Provider store={store }><App /></Provider>,document.getElementById('root'));
