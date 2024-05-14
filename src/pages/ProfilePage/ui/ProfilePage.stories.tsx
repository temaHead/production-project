import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/index';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({ profile: { form: {
    age: 22,
    city: 'qwerty',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'qwerty',
    lastname: 'qwertydsd',
    username: 'qwqwwq',
    avatar
} } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: { form: {
    age: 22,
    city: 'qwerty',
    country: Country.Russia,
    currency: Currency.RUB,
    first: 'qwerty',
    lastname: 'qwertydsd',
    username: 'qwqwwq',
    avatar
} } })];