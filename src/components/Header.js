import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => {
    return (
      <div>
        <IndexLink to="/">Início</IndexLink>
        <span className="separator"> | </span>
        <Link to="/About">Sobre</Link>
      </div>
    )
}

export default Header
