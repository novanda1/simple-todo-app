import { ComponentMeta, ComponentStory } from "@storybook/react";
import TodoItem from "./TodoItem";

export default {
  title: "Todo/Item",
  component: TodoItem,
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args) => (
  <TodoItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: 1,
    task: "Wash shoes",
    completed: false,
  },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    id: 1,
    task: "Wash shoes",
    completed: true,
  },
};
