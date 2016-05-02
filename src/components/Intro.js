import React from 'react'
import './Intro.scss'

const Intro = React.createClass({
  render() {
    return (
      <div className="intro">
        <div className="elevator-pitch bg-developers">
          <div className="pitch">
            <h1>Aprenda JavaScript</h1>
            <p>Torne-se um desenvolvedor profissional.</p>
            <br/>
            <p>Estude exatamente o que você precisa</p>
            <p>guiado por um mentor focado no seu sucesso.</p>
          </div>
        </div>
        <div className="sign-up">
          <h3>Comece agora</h3>
          <input name="email" placeholder="Seu email"/>
          <button className="button is-primary">Começar</button>
        </div>
        <div className="how-it-works">
          <div className="left">
            <h2>Atinja seus objetivos</h2>
            <p>Estude com um mentor do <strong>Padawan.io</strong> e tire todas as suas dúvidas sobre:</p>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Flux</li>
              <li>Express</li>
            </ul>
          </div>
          <div className="right"></div>
        </div>
      </div>
    )
  }
})

export default Intro
