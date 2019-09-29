import React, {Component} from 'react'
import Message from './Message'
import NewMessageEntry from './NewMessageEntry'
import {connect} from 'react-redux'
import {fetchMessages} from '../../store'

class DisconMessagesList extends Component {
  componentDidMount() {
    this.props.fetchInitialMessages()
  }
  render() {
    const channelId = Number(this.props.match.params.channelId) // because it's a string "1", not a number!
    const messages = this.props.messages
    const filteredMessages = messages.filter(
      message => message.channelId === channelId
    )

    return (
      <div>
        <ul className="media-list">
          {filteredMessages.map(message => (
            <Message message={message} key={message.id} />
          ))}
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    messages: state.chat.messages
  }
}

const mapDispatch = dispatch => {
  return {
    fetchInitialMessages: () => dispatch(fetchMessages())
  }
}

const MessagesList = connect(mapState, mapDispatch)(DisconMessagesList)
export default MessagesList
