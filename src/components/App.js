import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Início</IndexLink> | <Link to="/About">Sobre</Link>
      <br/>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
}

export default App
