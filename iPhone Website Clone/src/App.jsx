import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Footer/>
    </main>
  )
}

export default App
