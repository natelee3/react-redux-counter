import React from 'react';
import CounterApp from './components/CounterApp';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterApp />
      </div>
    </Provider>
  );
}

export default App;
