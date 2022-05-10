import React from 'react';
import './Styles.css'
import Menu from './Menu';
import Header from './Header';
import Screen from './Screen';
import { Piano } from './Piano';
import Footer from './Footer';
// import { useEffect, useState } from 'react';

// npm start
function App() {
  //Can only return one thing, if u want to return multiple things use <> and </>
  return (
    <>
    <Header></Header>
    <Menu></Menu>
    <Screen></Screen>
    <Piano></Piano>
    <Footer></Footer>
    </>
  )
}

export default App;
