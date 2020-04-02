import React from 'react';
import { I18nextProvider, Trans } from 'react-i18next';

import i18n from '../i18n';
import ChatWidgetFooter from '../../src/features/ChatWidget/views/ChatWidgetFooter'
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Footer',
  decorators: [storyFn => <I18nextProvider i18n={i18n}><Trans>{storyFn()}</Trans></I18nextProvider>],
  component: ChatWidgetFooter,
};
  
export const ToStorybook = () => <ChatWidgetFooter message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} handleChange={event => console.log(event)} handleSubmit={event => console.log(event)} />;

ToStorybook.story = {
    name: 'ChatWidgetFooter',
};
