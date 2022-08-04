import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';
import React from 'react';
import Paragraph from '.';

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
  argTypes: {
    color: { control: 'color'},
    children:{control:'text'}
  },
};

export const Intro = (args) => <Paragraph {...args}/>;