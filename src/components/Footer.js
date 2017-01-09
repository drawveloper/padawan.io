import React from 'react'
import './Footer.scss'

const Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <a href="mailto:gui@padawan.io">
          <img src="img/logo-title.png" alt="Padawan.io"/>
          <small>® 2017</small>
        </a>
      </div>
    )
  }
})

export default Footer
