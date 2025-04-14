import type {
  Meta,
  StoryObj,
} from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "body", "caption", "label"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    color: {
      control: "color",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const Body: Story = {
  args: {
    variant: "body",
    children: "Body text with regular weight",
  },
};

export const BodyBold: Story = {
  args: {
    variant: "body",
    weight: "bold",
    children: "Body text with bold weight",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Caption text",
  },
};

export const Label: Story = {
  args: {
    variant: "label",
    children: "LABEL TEXT",
  },
};

export const ColoredText: Story = {
  args: {
    variant: "body",
    color: "#007AFF",
    children: "Colored text example",
  },
};

export const CenteredText: Story = {
  args: {
    variant: "body",
    align: "center",
    children: "Centered text example",
  },
};
