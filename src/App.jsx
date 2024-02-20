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
      <div>
        <nav>
          <ul className="flex gap-10 my-5 mx-5">
            <li className="text-2xl">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-2xl">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
