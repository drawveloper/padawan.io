import React from 'react'
import { IndexLink } from 'react-router'
import './Header.scss'

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <p className="navbar-item">
          <IndexLink className="title" to="/"><img src="img/logo-title.png" alt="Padawan.io"/></IndexLink>
        </p>
      </nav>
    )
  }
})

export default Header
