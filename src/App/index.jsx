import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom'

import store from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pages from './Pages';

import './style/reset.css';

const App = () => (
  <div className="app">
    <Navbar />
    <Pages />
    <Footer />
  </div>
)

const Wrapper = () => (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


render(<Wrapper />, document.getElementById('root'));