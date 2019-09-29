import React, {Component} from 'react'
import CalendarActual from './calendarActual'

export default class CalendarView extends Component {
  render() {
    return (
      <div className="calendar-div" id="splash">
        <CalendarActual />
      </div>
    )
  }
}
