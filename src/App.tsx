import React from 'react'
import Profile from './components/Profile'
import Content from './components/Content'
import Other from './components/Other';
import Update from './components/Update';
import Footer from './components/Footer';
import Head from './Head'
import './App.scss'

const App = () => {
  const year: number = 2022
  const month: number = 8
  const date: number = 15
  return (
    <div className="App">
      <Head props='tamurakeito | portfolio'/>
      <Profile/>
      <Content/>
      <Other/>
      <Update
        year={year}
        month={month}
        date={date}
      />
      <Footer/>
    </div>
  );
}

export default App
