import React from 'react'
import { Jumbotron } from 'reactstrap'
import { useTranslation } from 'react-i18next'

const ChatWidget: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Jumbotron>
        <h1>{t('features.chatwidget.header')}</h1>
      </Jumbotron>
    </div>
  )
}

export default ChatWidget
