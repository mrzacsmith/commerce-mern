import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="#">commerce mern</a>
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
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d1.jpg"
                  alt="products"
                />
                <div className="product-name">
                  <a href="product.html">slim shirt</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="./images/d1.jpg"
                  alt="products"
                />
                <div className="product-name">
                  <a href="product.html">slim shirt</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d1.jpg"
                  alt="products"
                />
                <div className="product-name">
                  <a href="product.html">slim shirt</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d1.jpg"
                  alt="products"
                />
                <div className="product-name">
                  <a href="product.html">slim shirt</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d1.jpg"
                  alt="products"
                />
                <div className="product-name">
                  <a href="product.html">slim shirt</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="../images/d1.jpg"
                  alt="products"
                />
                <div className="product-name">
                  <a href="product.html">slim shirt</a>
                </div>
                <div className="product-brand">nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All rights reservered.</footer>
    </div>
  )
}

export default App
