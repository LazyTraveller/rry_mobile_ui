import React from 'react';

import Task from './Task';

/**
 * 
component -- component 组件本身
title -- 如何在 Storybook 侧边栏中引用组件
excludeStories -- 在 story 文件中导出，但不需要被 Storybook 渲染为 stories
argTypes -- 每个 story 中指定的 args 行为
 */
export default {
  component: Task,
  title: 'Task',
};

/**
 * 
 * @param {*} args 
 * 组件有很多排列，因此将其分配给一个 Template 变量是很方便的
 * Template.bind({}) 是一个可以用于复制函数的 JavaScript 标准 技术。我们使用此技术允许每个导出的 story 都使用相同的实现，但能够设置自己的属性。
 */
const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};