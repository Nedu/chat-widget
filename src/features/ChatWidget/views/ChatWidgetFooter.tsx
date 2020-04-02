import React, { ChangeEvent, FormEvent } from 'react'
import { Input, Button, Form } from 'reactstrap'
import { useTranslation } from 'react-i18next'

interface Props {
  message: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const ChatWidgetFooter: React.FC<Props> = ({
  message,
  handleChange,
  handleSubmit,
}: Props) => {
  const { t } = useTranslation()
  return (
    <div className="footer-container">
      <div className="form-container">
        <Form className="form-elem" onSubmit={(event) => handleSubmit(event)}>
          <Input
            type="text"
            name="chatMessage"
            placeholder={t('features.chatwidget.footerInputPlaceholder')}
            value={message}
            className="form-input"
            onChange={(event) => handleChange(event)}
          />
          <Button color="info">{t('features.chatwidget.footerButton')}</Button>
        </Form>
      </div>
    </div>
  )
}

export default ChatWidgetFooter
