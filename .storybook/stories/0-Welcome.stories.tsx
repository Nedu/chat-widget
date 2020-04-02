import React from 'react';

const Welcome = () => {
  return (
    <>
      <h1>Welcome to FieldChat</h1>
      <p>This is a UI component dev environment for FieldChat.</p>
      <p>Here you can find re-usable components used in this chat widget application.</p>
    </>
  )
};

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'FieldChat',
};
