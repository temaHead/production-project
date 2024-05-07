import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { title } from 'process';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    text: 'text',
};
export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'title',
};
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'title',
    text: 'text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'text',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const error = Template.bind({});
onlyTextDark.args = {
    text: 'text',
    title: 'title',
    theme: TextTheme.ERROR,

};