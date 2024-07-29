// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card.jsx'
import Data from './assets/Data.jsx'
import Header from './Component/Header.jsx'

function App() {
  // const [count, setCount] = useState(0)


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
