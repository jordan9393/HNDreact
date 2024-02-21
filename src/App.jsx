import React from 'react'
import './App.css'
import Home from './pages/shared/Home'
import Login from './pages/shared/Login'
import Register from './pages/shared/Register'
// import { Router } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="mainNav">

      <div>
        <nav>
          <ul className="">
            <li className="text-2xl display-inline">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-2xl ">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
     
    

        <hr />
     


      </div>
      <div className="mainNav1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </div>
    </Router>
    
    
  )
}

export default App
