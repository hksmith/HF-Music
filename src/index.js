import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './mucisState';
import musicSaga from './musicSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    musics: musicReducer
  },
  middleware: [saga]
});

saga.run(musicSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
