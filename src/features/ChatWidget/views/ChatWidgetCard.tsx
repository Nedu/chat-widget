import React from 'react'

import { Message } from '../containers/ChatWidget'
import './styles.scss'

interface Props {
  message: Message
}

const ChatWidgetCard: React.FC<Props> = ({ message }: Props) => {
  return (
    <div className="card-container">
      <p className="truncate-overflow">{message.message}</p>
    </div>
  )
}

export default ChatWidgetCard
