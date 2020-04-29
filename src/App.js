import React from 'react';
import Header from './components/header/header.js';
import  Nav from './components/navbar/nav.js';
import  Main from './components/main/main.js';
import  Footer from './components/footer/footer.js';

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
