import React from 'react';
import './style.css';

import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';

export default function App() {
  return (
    <div className="body">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
