import React from 'react'
import './HowItWorks.scss'

const HowItWorks = React.createClass({
  render() {
    return (
      <div className="how-it-works">
        <div className="step step-1">
          <h1>Escolha seu curso</h1>
          <span>O que você quer aprender?</span>
          <ul className="courses">
            <li>Front-end com ReactJS</li>
            <li>Back-end com NodeJS</li>
            <li>Desenvolvimento web básico: HTML/CSS/JS</li>
          </ul>
        </div>
        <div className="step step-2">
          <h1>Agende sua primeira sessão de mentoria</h1>
        </div>
        <div className="step step-3">
          <h1>Estude com o melhor conteúdo</h1>
        </div>
        <div className="step step-4">
          <h1>Acompanhamento semanal com seu mentor</h1>
        </div>
        <div className="step step-5">
          <h1>Conecte-se com uma comunidade de alunos, mentores e empresas.</h1>
        </div>
      </div>
    )
  }
})

export default HowItWorks
