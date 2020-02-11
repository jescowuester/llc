import { configure } from '@storybook/react';
import '../src/theme.css';
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|ts)x?$/), module);
