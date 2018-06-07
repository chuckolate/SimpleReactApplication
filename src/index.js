import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './components/homepage';
import Tea from './components/tea';
import PreparingTea from './components/preparing_tea';

ReactDOM.render(
	<BrowserRouter>
    	<div>
    		<Switch>
    			<Route path="/preparing_tea" component={PreparingTea} />
    			<Route path="/teas" component={Tea} />
    			<Route path="/" component={Homepage} />
    		</Switch>
    	</div>
    </BrowserRouter>
	, document.getElementById('root'));