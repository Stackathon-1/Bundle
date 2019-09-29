// import {createStore, applyMiddleware} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'

// import thunkMiddleware from 'redux-thunk'
// import loggingMiddleware from 'redux-logger'
import axios from 'axios'
import socket from '../socket'

//Action Types
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER'
const WRITE_MESSAGE = 'WRITE_MESSAGE'
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER'
const AUTHOR_NAME = 'AUTHOR_NAME'

//Action Creators
export const authorName = name => ({
  type: AUTHOR_NAME,
  name
})
export const gotMessagesFromServer = messages => ({
  type: GOT_MESSAGES_FROM_SERVER,
  messages
})

export const writeMessage = inputContent => ({
  type: WRITE_MESSAGE,
  newMessageEntry: inputContent
})
export const gotNewMessageFromServer = message => ({
  type: GOT_NEW_MESSAGE_FROM_SERVER,
  message
})

//Thunk Creators
export const fetchMessages = () => {
  return async dispatch => {
    const response = await axios.get('/api/messages')
    const messages = response.data
    const action = gotMessagesFromServer(messages)
    dispatch(action)
  }
}

export const postMessage = message => {
  return async dispatch => {
    const response = await axios.post('/api/messages', message)
    const newMessage = response.data
    const action = gotNewMessageFromServer(newMessage)
    dispatch(action)
    socket.emit('new-message', newMessage)
  }
}

//Initial State
const initialState = {
  messages: [],
  newMessageEntry: '',
  name: ''
}

//Reducer
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
      return {...state, messages: action.messages}
    case WRITE_MESSAGE:
      return {...state, newMessageEntry: action.newMessageEntry}
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return {...state, messages: [...state.messages, action.message]}
    case AUTHOR_NAME:
      return {...state, name: action.name}
    default:
      return state
  }
}

export default chatReducer
