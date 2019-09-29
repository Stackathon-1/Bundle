import React, {Component} from 'react'
import {connect} from 'react-redux'
import {authorName} from '../../store'

class NameEntry extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt) {
    this.props.updateName(evt.target.value)
  }
  render() {
    return (
      <div>
        <form className="form-inline">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={this.handleChange}
            className="form-control"
            value={this.props.name}
          />
        </form>
      </div>
    )
  }
}
const mapState = state => {
  return {
    name: state.name
  }
}
const mapDispatch = dispatch => {
  return {
    updateName: name => dispatch(authorName(name))
  }
}
export default connect(mapState, mapDispatch)(NameEntry)
