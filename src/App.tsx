import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppContent from './AppContent';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
