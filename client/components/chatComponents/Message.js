import React from 'react'

export default function Message(props) {
  const message = props.message
  console.log('MESS', message.user.image)
  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={message.user.image} alt="image" />
        </a>
        <div className="media-right-block">
          <h4 className="media-heading">{message.user.name}</h4>

          <div className="media-body">{message.content}</div>
        </div>
      </div>
    </li>
  )
}
