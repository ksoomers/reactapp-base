import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/containers/main/App';
import DefaultApp from './reducers/DefaultApp';

// initialize store
const store = createStore(DefaultApp);

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    document.getElementById('app'),
);
