// Badge.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Badge from '../../../component/Badge';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Component/Badge/Example',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Success = (args: any) => <Badge {...args}>Success</Badge>;
Success.args = {
  state: "success",
}; 
