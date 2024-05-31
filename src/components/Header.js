import { Component } from 'react'

function Header({ title }) {
    return (
      <header className="header">
        <div className="container flex justify-between">
          <h1 className="title">{title}</h1>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

export default Header;