import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Slidebar from './Components/Slidebar'
import { Routes, Route } from "react-router-dom"

function App() {

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
