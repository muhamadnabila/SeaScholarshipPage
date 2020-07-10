import React from 'react';
// import './App.scss';
import LogoITB from './assets/Slicing/Logo_ITB.png'
import Home from './Views/Home.js'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
