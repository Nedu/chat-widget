import React from 'react'

import { IMessage } from '../containers/ChatWidget'
import './styles.scss'

interface Props {
  message: IMessage
}

const ChatWidgetCard: React.FC<Props> = ({ message }: Props) => {
  return (
    <div className="card-container">
      <p className="truncate-overflow">{message.message}</p>
    </div>
  )
}

export default ChatWidgetCard
