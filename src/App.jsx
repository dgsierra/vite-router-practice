import './App.css'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Books from './Books'

function App () {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />}/>
    </Routes>
    </>
  )
};

export default App
