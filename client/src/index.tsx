import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import PromiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './_reducers';

const enhancer = 
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(PromiseMiddleware, ReduxThunk))
    : composeWithDevTools(applyMiddleware(PromiseMiddleware, ReduxThunk, logger));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
	<React.StrictMode>
		<Provider 
			store={ store }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
