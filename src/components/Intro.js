import React from 'react'

const Intro = React.createClass({
  render() {
    return (
      <div className="intro">
        <div className="elevator-pitch bg-developers">
          <div className="pitch">
            <h1>Aprenda mais rápido</h1>
            <p>Mentoria 1-a-1 com especialistas em desenvolvimento de software</p>
          </div>
        </div>
        <div className="sign-up">
          <form>
            <h3>Comece agora</h3>
            <input name="email" placeholder="Seu email"/>
            <button className="button is-primary">Começar</button>
          </form>
        </div>
      </div>
    )
  }
})

export default Intro
