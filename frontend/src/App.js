import React from 'react';
import './style.scss';
import Footer from './Footer';
import Header from './Header'
import Main from './main'

function App() {
  return (
    <div className="body">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
