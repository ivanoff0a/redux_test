import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';

const store = configureStore();

console.log(store.getState());

render (
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
)


