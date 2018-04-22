import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './css/index.css';
import './css/App.css';

// Components
import App from './components/App';

// React-Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

// Create store
const store = createStore(rootReducer);

ReactDOM.render(

    <Provider store={ store } >
        <App />
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
