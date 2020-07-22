import React from 'react'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'
import HomeScreen from './Screens/HomeScreen'
import './App.css'

const App = () => {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">commerce mern</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">cart</a>
            <a href="signin.html">signin</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>shopping categories</h3>
          <button className="sidebar-close-btn" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="pants.html">pants</a>
            </li>
            <li>
              <a href="shirts.html">shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights reservered.</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
