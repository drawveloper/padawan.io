import React from 'react'
import './Hero.scss'

const Hero = React.createClass({
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <h2 className="hero-title">
            Torne-se um desenvolvedor
          </h2>
          <h1 className="hero-title-vtex">
            profissional.
          </h1>
          <p className="hero-subtitle">
            Em breve...
          </p>
        </div>
      </div>
    )
  }
})

export default Hero
