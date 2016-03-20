import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div>
      <h4>
        Essa página não existe 🙁
      </h4>
      <Link to="/"> Voltar para o início </Link>
    </div>
  )
}

export default NotFoundPage
