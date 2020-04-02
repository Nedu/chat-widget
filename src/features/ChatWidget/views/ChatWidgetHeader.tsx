import React from 'react'
import { useTranslation } from 'react-i18next'

import './styles.scss'

const ChatWidgetHeader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="header">
      <h1>{t('features.chatwidget.header')}</h1>
    </div>
  )
}

export default ChatWidgetHeader
