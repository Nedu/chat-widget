import React from 'react'

import { IMessage } from '../containers/ChatWidget'
import ChatWidgetCard from './ChatWidgetCard'
import './styles.scss'

interface Props {
  messages: IMessage[]
}

const ChatWidgetMain: React.FC<Props> = ({ messages }: Props) => {
  return (
    <div className="main-container">
      <div className="scrolling-div">
        {messages.map((message: IMessage, index: number) => (
          <ChatWidgetCard key={index} message={message} />
        ))}
      </div>
    </div>
  )
}

export default ChatWidgetMain
