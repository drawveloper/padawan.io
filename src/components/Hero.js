import React from 'react'
import './Hero.scss'

const Hero = React.createClass({
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <h2 className="hero-title">
            Domine as tecnologias da
          </h2>
          <h1 className="hero-title-vtex">
            plataforma VTEX.
          </h1>
          <p className="hero-subtitle">
            Todo o poder ao seu alcance. <br/>
            Conecte-se à comunidade Padawan.io e aprenda diretamente com especialistas.
          </p>
        </div>
      </div>
    )
  }
})

export default Hero
