import React from 'react';
import Header from './components/header.js';
import  Nav from './components/nav.js';
import  Main from './components/main.js';
import  Footer from './components/footer.js';

import './App.css';

function App() {
  return (
    <div className="App" id="wrapper">
        <div id="blueline"></div>
      
      <Header/>
      <Nav/>
     
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
