import React from 'react'

const MessageList = ({messages}) => {
  return (
    <div>
        <ul>
            {messages.map(message => (
                <li key={message.id}>
                <strong>{message.user}: </strong>{message.text}
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default MessageList;