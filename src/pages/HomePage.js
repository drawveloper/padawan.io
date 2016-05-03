import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SignUp from '../components/SignUp'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import './HomePage.scss'

const HomePage =  React.createClass({
  propTypes: {
    actions: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired
  },

  render() {
    return (
      <div className="home page">
        <Header/>
        <Hero/>
        <SignUp/>
        <HowItWorks/>
        <Footer/>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
