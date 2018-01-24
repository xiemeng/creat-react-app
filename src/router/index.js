import React,{browserHistory} from 'react'
import {Router,Route,Switch} from 'react-router-dom';

import { createHashHistory } from 'history'
const history  = createHashHistory()
import Home from '../views/home';
import Mine from '../views/mine';
import Invest from '../views/invest';

// <Router history={history}>
const AppRouter = (
    <Router history={history}>
        <Switch>
            
            <Route path="/" component={Home} exact/>
            <Route path="/Home" component={Home}/>
            <Route path="/Mine" component={Mine}/>
            <Route path="/Invest" component={Invest}/>
        </Switch>
    </Router>
)

export default AppRouter