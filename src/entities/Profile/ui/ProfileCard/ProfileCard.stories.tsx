import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        age: 22,
        city: 'qwerty',
        country: Country.Russia,
        currency: Currency.RUB,
        first: 'qwerty',
        lastname: 'qwertydsd',
        username: 'qwqwwq',
        avatar
    }
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

export const withError = Template.bind({});
withError.args = {
    error: 'true'
};
