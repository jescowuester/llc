import React from 'react';
import Button from './button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const button = () => (
  <Button onClick={() => action('clicked')}>Hello world</Button>
);
export const loading = () => (
  <Button isLoading onClick={() => action('clicked')}>
    Hello world
  </Button>
);
