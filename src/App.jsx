
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Footer from './components/Footer'

function App() {

  return (
    
<>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Index/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/skills" element={<Skills/>}/>
  <Route path="/contact" element={<Contact/>}/>


 

</Routes>
<Footer/>
</BrowserRouter>
</>
  )
}

export default App
