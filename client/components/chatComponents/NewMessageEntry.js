import React, {Component} from 'react'
import {writeMessage, postMessage} from '../../store'
import {connect} from 'react-redux'

class DisconNewMessageEntry extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.props.write(evt.target.value)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const {name, newMessageEntry} = this.props
    const content = newMessageEntry
    const {channelId} = this.props
    this.props.post({name, content, channelId})
    this.props.write('')
    //------
    // evt.preventDefault(); // don't forget to preventDefault!
    // // our message content is on our state, which we're getting from our Redux store
    // const content = this.props.newMessageEntry;
    // // our channelId is available from the props sent by MessagesList, which it receives as props from the Route!
    // const channelId = this.props.channelId;
    // this.props.post({ content, channelId });
  }

  render() {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={this.props.newMessageEntry}
            onChange={this.handleChange}
            placeholder="Say something nice..."
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              Chat!
            </button>
          </span>
        </div>
      </form>
    )
  }
}

const mapState = state => {
  return {
    name: state.name,
    newMessageEntry: state.chat.newMessageEntry
  }
}

const mapDispatch = dispatch => {
  return {
    post: message => dispatch(postMessage(message)),
    write: string => dispatch(writeMessage(string))
  }
}

const NewMessageEntry = connect(mapState, mapDispatch)(DisconNewMessageEntry)
export default NewMessageEntry
