import React, { Component } from 'react';
import FastClick from 'fastclick';
FastClick.attach(document.body);
import {Provider} from 'react-redux';
import store from './store';
import route from './router';






class App extends Component{
    render() {
        return (
        	
          <Provider store={store}>
                {route}
          </Provider>
        )
    }
}

export default App