import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fugit consequatur eos voluptatum iste perferendis quos alias consequuntur dolores cum ipsam exercitationem, rem quam nihil dolor, illo odio molestias deleniti est assumenda officiis, pariatur suscipit at vitae. Veniam eveniet excepturi ex nam quam optio porro voluptatibus quis, neque et modi cupiditate assumenda rem illum ab eligendi nulla incidunt. Repellat quibusdam tempore quia optio adipisci, fuga natus quae unde esse at, blanditiis hic corporis possimus quaerat molestias totam voluptates est quasi tempora? Amet deleniti veritatis, molestias assumenda laudantium ipsum odit cumque dolores error eius quis modi, voluptate voluptatem aliquam odio. At.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus fugit consequatur eos voluptatum iste perferendis quos alias consequuntur dolores cum ipsam exercitationem, rem quam nihil dolor, illo odio molestias deleniti est assumenda officiis, pariatur suscipit at vitae. Veniam eveniet excepturi ex nam quam optio porro voluptatibus quis, neque et modi cupiditate assumenda rem illum ab eligendi nulla incidunt. Repellat quibusdam tempore quia optio adipisci, fuga natus quae unde esse at, blanditiis hic corporis possimus quaerat molestias totam voluptates est quasi tempora? Amet deleniti veritatis, molestias assumenda laudantium ipsum odit cumque dolores error eius quis modi, voluptate voluptatem aliquam odio. At.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
