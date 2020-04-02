import React from 'react';
import { I18nextProvider, Trans } from 'react-i18next';

import i18n from '../i18n';
import ChatWidgetHeader from '../../src/features/ChatWidget/views/ChatWidgetHeader'

export default {
  title: 'Header',
  decorators: [storyFn => <I18nextProvider i18n={i18n}><Trans>{storyFn()}</Trans></I18nextProvider>],
  component: ChatWidgetHeader,
};
  
export const ToStorybook = () => <ChatWidgetHeader />;

ToStorybook.story = {
    name: 'ChatWidgetHeader',
};
