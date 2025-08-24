import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Slidebar from './Components/Slidebar'
import { Routes, Route } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true }); 
}, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/home' element={
          <>
            <Slidebar />
            <Footer />
          </>
        } />
        <Route path='/about' element={
          <>
            <About />
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
