import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import Header from '../components/Header'
import Intro from '../components/Intro'

const HomePage =  React.createClass({
  propTypes: {
    actions: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired
  },

  render() {
    return (
      <div>
        <Header/>
        <Intro/>
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
