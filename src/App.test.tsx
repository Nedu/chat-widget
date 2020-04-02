import React, { ReactElement, ReactChild, ReactNode } from 'react'
import App from './App'
import {
  render as rtlRender,
  screen,
  RenderResult,
  RenderOptions,
} from '@testing-library/react'
import {
  I18nextProvider,
  I18nextProviderProps,
  TranslationProps,
} from 'react-i18next'

import i18n from './shared/il8n'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

function render(
  ui: ReactElement,
  options?: TranslationProps
): React.ReactElement {
  function Wrapper({ children }: TranslationProps) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
  }
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...options }),
  }
}
test('renders text', () => {
  render(<App />)
  const heading = screen.getByRole('heading')
  expect(heading).toHaveTextContent('FieldChat')
})
