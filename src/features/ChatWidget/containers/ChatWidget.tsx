import React, { useState, ChangeEvent, FormEvent } from 'react'

import ChatWidgetView from '../views/ChatWidget'

export interface Message {
  message: string
}

const ChatWidget: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value)
  }

  const addMessage = (message: string): void => {
    const newMessage: Message[] = [...messages, { message }]
    setMessages(newMessage)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    addMessage(message)
    setMessage('')
  }

  return (
    <ChatWidgetView
      message={message}
      messages={messages}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default ChatWidget
