import React, { ChangeEvent, FormEvent } from 'react'
import { Input, Button, Form } from 'reactstrap'

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
  return (
    <div className="footer-container">
      <div className="form-container">
        <Form className="form-elem" onSubmit={(event) => handleSubmit(event)}>
          <Input
            type="text"
            name="chatMessage"
            placeholder="Enter message"
            value={message}
            className="form-input"
            onChange={(event) => handleChange(event)}
          />
          <Button color="info">Send</Button>
        </Form>
      </div>
    </div>
  )
}

export default ChatWidgetFooter
