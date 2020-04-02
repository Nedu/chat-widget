import React from 'react'

import { Message } from '../containers/ChatWidget'
import ChatWidgetCard from './ChatWidgetCard'
import './styles.scss'

interface Props {
  messages: Message[]
}

const ChatWidgetMain: React.FC<Props> = ({ messages }: Props) => {
  return (
    <div className="main-container">
      <div className="scrolling-div">
        {messages.map((message: Message, index: number) => (
          <ChatWidgetCard key={index} message={message} />
        ))}
      </div>
    </div>
  )
}

export default ChatWidgetMain
