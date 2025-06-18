import './App.css'
import LandingPage from './pages/LandingPage'
import Register from './pages/Registration'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login'


function App() {
  

  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />

      </Routes>

    </Router>
    
  )
}

export default App