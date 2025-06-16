import './App.css'
import LandingPage from './pages/LandingPage'
import Register from './pages/Registration'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  

  return (
    <Router>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>}/>

      </Routes>

    </Router>
    
  )
}

export default App