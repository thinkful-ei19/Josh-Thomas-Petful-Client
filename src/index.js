import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Dashboard from './Dashboard';
import store from './store';

ReactDOM.render(
<Provider store={store}>
<Dashboard />
</Provider>, document.getElementById('root'));
