import 'modern-normalize/modern-normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './components/App';
import { storeItems } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeItems.store}>
      <PersistGate loading={null} persistor={storeItems.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
