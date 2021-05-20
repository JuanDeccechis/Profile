import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//desde aca cambia por reducer/saga
//import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from "react-redux";
import reducer from "./reducer"; //despues va a cambiar por el composeReducer
import rootSaga from './sagas'; //despues va a cambiar por un grupo de saga

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  //cambia porque ahora usa el store global
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
//reportWebVitals();
