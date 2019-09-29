import React, {Component} from 'react'
import Calendar from 'react-calendar/dist/entry.nostyle'

export default class CalendarActual extends Component {
  state = {
    value: new Date()
  }

  render() {
    const {value} = this.state
    const datePicker = value.toString().slice(0, 15)
    return (
      <div className="Sample">
        <header>
          <h1 className="calendar-title">create event </h1>
          <h3>{datePicker}</h3>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar onChange={this.onChange} value={value} />
          </main>
        </div>
      </div>
    )
  }
}
