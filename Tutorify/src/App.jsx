import './App.css'
import LandingPage from './pages/LandingPage'
import Register from './pages/Registration'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'


function App() {
  

  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />

      </Routes>

    </Router>
    
  )
}

export default App