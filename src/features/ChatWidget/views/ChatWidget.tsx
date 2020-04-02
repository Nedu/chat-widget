import React, { FormEvent, ChangeEvent } from 'react'

import { Message } from '../containers/ChatWidget'
import ChatWidgetHeader from './ChatWidgetHeader'
import ChatWidgetMain from './ChatWidgetMain'
import ChatWidgetFooter from './ChatWidgetFooter'

interface Props {
  message: string
  messages: Message[]
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ChatWidget: React.FC<Props> = ({
  message,
  messages,
  handleSubmit,
  handleChange,
}: Props) => {
  return (
    <div className="chat-container">
      <ChatWidgetHeader />
      <ChatWidgetMain messages={messages} />
      <ChatWidgetFooter
        message={message}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  )
}

export default ChatWidget
