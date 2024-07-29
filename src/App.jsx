import React from 'react'
import './App.css'
import Card from './Component/Card.jsx'
import Data from './assets/Data.js'
import Header from './Component/Header.jsx'

function App() {
  return (
    <div className='page'>
      <Header/>
      {
        Data.map((item, index) => (
          <Card id={index} item={item}/>
        ))
      }
    </div>
  )
}

export default App
