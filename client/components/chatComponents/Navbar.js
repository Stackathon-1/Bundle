import React, {Component} from 'react'
import NameEntry from './NameEntry'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Navbar component with NameEntry</h1>
        <h3># channelname goes here</h3>
        <NameEntry />
      </nav>
    )
  }
}
