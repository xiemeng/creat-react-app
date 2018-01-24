import React from 'react';
import {render} from 'react-dom';
import './assets/css/common.css';
import './service/rem';
import './api/config';
import App from './App';

render(
    <App></App>,
    document.getElementById('app')
)