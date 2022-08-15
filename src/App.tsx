import React from 'react'
import Profile from './components/Profile'
import Content from './components/Content'
import Other from './components/Other';
import Footer from './components/Footer';
import Head from './Head'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Head props='tamurakeito | portfolio'/>
      <Profile/>
      <Content/>
      <Other/>
      <Footer/>
    </div>
  );
}

export default App
