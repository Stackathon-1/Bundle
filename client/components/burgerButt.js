import React, {Component} from 'react'

export default class BurgerButt extends Component {
  constructor(props) {
    super(props)
    this.state = {clicked: false}
  }
  toggle() {
    this.setState({clicked: !this.state.clicked})
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div
          id="nav-burger"
          className={
            this.state.clicked
              ? 'hamburger hamburger--spin is-active'
              : 'hamburger hamburger--spin'
          }
          type="button"
          onClick={this.toggle.bind(this)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
      </div>
    )
  }
}
