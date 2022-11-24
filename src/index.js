import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './Context/StateProvider';
import { InitialState } from './Context/InitialState';
import reducer from './Context/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StateProvider initialState={InitialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);

