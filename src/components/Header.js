import React from 'react'
import { Link, IndexLink } from 'react-router'
import './Header.scss'

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <p className="navbar-item">
          <IndexLink className="title" to="/"><img src="img/logo-title.png" alt="Padawan.io"/></IndexLink>
        </p>
        <div className="navbar-right">
          <p className="navbar-item">
            <Link to="/estudantes">Estudantes</Link>
          </p>
          <p className="navbar-item">
            <Link to="/mentores">Mentores</Link>
          </p>
        </div>
      </nav>
    )
  }
})

export default Header
