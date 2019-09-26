import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  console.log('userHome comp')
  return (
    <div id="splash">
      {/* <h1 className="bold-title-splash">GROUP, ASSIGN AND SCHEDULE </h1>
      <h1 className="bold-title-splash">EVERYONE </h1> */}

      <h1 className="bold-title">GROUP </h1>
      <h1 className="bold-title">ASSIGN </h1>
      <h1 className="bold-title">SCHEDULE </h1>
      <h1 className="bold-title">EVERYBODY </h1>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
