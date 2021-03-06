import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './App';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

const store: Store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);