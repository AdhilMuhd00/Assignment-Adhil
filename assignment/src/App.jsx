
import './App.css'
import Navbar from './module/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './module/Home'
import Add from './module/Add'

function App() {
  
  

  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />}/>

          
        </Routes>
        
        
      
      
      
    </>
  )
}

export default App
