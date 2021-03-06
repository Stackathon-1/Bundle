import React from 'react'
import {Link} from 'react-router-dom'

export default function DarkLogin() {
  console.log('on DarkLogin component')
  return (
    <div id="splash">
      {/* <h1 className="bold-title-splash">GROUP, ASSIGN AND SCHEDULE </h1>
      <h1 className="bold-title-splash">EVERYONE </h1> */}
      <Link to="/channels">
        <h1 className="bold-title">CHANNELS </h1>
      </Link>

      <Link to="/calendar">
        <h1 className="bold-title">CALENDAR </h1>
      </Link>
      <h1 className="bold-title">SCHEDULE </h1>
      <h1 className="bold-title">USERS </h1>
    </div>
  )
}
