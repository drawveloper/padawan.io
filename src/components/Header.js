import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <p className="navbar-item">
          <IndexLink className="title" to="/">Padawan.io</IndexLink>
        </p>
        <p className="navbar-item">
          <Link to="/estudantes">Estudantes</Link>
        </p>
        <p className="navbar-item">
          <Link to="/mentores">Mentores</Link>
        </p>
      </nav>
    )
  }
})

export default Header
