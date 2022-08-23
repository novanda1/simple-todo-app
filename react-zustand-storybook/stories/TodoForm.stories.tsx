import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TodoForm } from "./TodoForm";

export default {
  title: "Todo/Form",
  component: TodoForm,
} as ComponentMeta<typeof TodoForm>;

const Template: ComponentStory<typeof TodoForm> = (args) => (
  <TodoForm {...args} />
);

export const Default = Template.bind({});
