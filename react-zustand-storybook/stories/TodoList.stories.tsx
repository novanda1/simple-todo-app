import { ComponentMeta, ComponentStory } from "@storybook/react";
import TodoList from "./TodoList";

export default {
  title: "Todo/List",
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Todo List",
};
