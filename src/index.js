import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import store from './redux/redux-store';
import './index.css';
import { Provider } from 'react-redux';

//debugger
ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App state = {store.getState()} />
		</Provider>
	</BrowserRouter>
, document.getElementById('root')
);




