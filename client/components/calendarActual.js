import React, {Component} from 'react'
import Calendar from 'react-calendar/dist/entry.nostyle'
import CalendarForm from './CalendarForm'

export default class CalendarActual extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: new Date()
    }
  }

  onChange = value => this.setState({value})

  render() {
    const {value} = this.state
    const datePicker = value.toString().slice(0, 15)
    console.log(datePicker)
    return (
      <div className="Sample">
        <header>
          <h1 className="calendar-title">create event </h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <div className="calendar-flex-this">
              <div>
                <Calendar onChange={this.onChange} value={value} />
                <h3>Create Event for: {datePicker}</h3>
              </div>
              <CalendarForm datePicker={datePicker} />
            </div>
          </main>
        </div>
      </div>
    )
  }
}
