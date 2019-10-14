import React, {Component} from 'react'
import ChannelList from './ChannelList'

export default class Sidebar extends Component {
  render() {
    return (
      <section className="sidebar-chat">
        <div className="sidebar-header">
          <h3 href="#">
            <div>Qrew Chat</div>
            <i alt="Brand" className="glyphicon glyphicon-comment" />
          </h3>
        </div>
        <h5>Channels</h5>
        <ChannelList />
      </section>
    )
  }
}
