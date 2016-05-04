import React from 'react'
import './Hero.scss'

const Hero = React.createClass({
  render() {
    return (
      <div className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Torne-se um desenvolvedor de software profissional.
          </h1>
          <p className="hero-subtitle">
            Finalmente, uma plataforma de ensino para o nosso século.
            Aprenda mais rápido do que nunca e receba ofertas de emprego das melhores empresas do mercado.
            Qual vai ser o seu caminho?
            Estamos animados para descobrir.
          </p>
        </div>
      </div>
    )
  }
})

export default Hero
