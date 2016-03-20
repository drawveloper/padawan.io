import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired
  };

  render() {
    return (
      <h1>Olá, mundo!</h1>
    )
  }
}

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
