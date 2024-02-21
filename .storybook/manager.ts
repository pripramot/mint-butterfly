import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'Jiraphinya',
    brandUrl: 'https://github.com/pripramot/mint-butterfly',
    brandTarget: '_blank',
  }),
});
