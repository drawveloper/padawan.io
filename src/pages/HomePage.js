import React, { PropTypes } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './HomePage.scss'

const HomePage =  React.createClass({
  propTypes: {
    home: PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="home page">
        <Header/>
        <Hero/>
        <Footer/>
      </div>
    )
  }
})

export default HomePage
