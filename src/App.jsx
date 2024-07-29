import React from 'react'
import './App.css'
import Card from './Component/Cards.jsx'
import Data from './assets/Data.js'
import Header from './Component/Header.jsx'

function App() {
  return (
    <div className='page'>
      <Header/>
      <Card
      id = {Data.title}
      Data = {Data}
      />
    </div>
  )
}

export default App
