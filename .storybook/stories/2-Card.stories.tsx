import React from 'react';
import { I18nextProvider, Trans } from 'react-i18next';

import i18n from '../i18n';
import ChatWidgetCard from '../../src/features/ChatWidget/views/ChatWidgetCard'
import ChatWidgetMain from '../../src/features/ChatWidget/views/ChatWidgetMain'

export default {
  title: 'Card',
  decorators: [storyFn => <I18nextProvider i18n={i18n}><Trans>{storyFn()}</Trans></I18nextProvider>],
  component: ChatWidgetCard,
};
  
export const ToStorybook = () => <ChatWidgetCard message={{ message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}} />;
export const CardList = () => <ChatWidgetMain messages={[{ message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}, { message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}]}/>;

ToStorybook.story = {
    name: 'ChatWidgetCard',
};
