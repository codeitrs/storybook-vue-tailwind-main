import { Meta, StoryObj } from "@storybook/vue3";
import BasicButton from "../components/button/Button.vue";

const meta: Meta<typeof BasicButton> = {
  title: "Components/BasicButton",
  component: BasicButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Text displayed on the button",
    },
    backgroundColor: {
      control: "text",
      description: "Background color of the button",
    },
    textColor: {
      control: "text",
      description: "Text color of the button",
    },
    fontSize: {
      control: "text",
      description: "Font size of the button text",
    },
    hoverState: {
      control: "text",
      description: "CSS class for hover state",
      defaultValue: "hover:bg-opacity-80",
    },
    focusState: {
      control: "text",
      description: "CSS class for focus state",
      defaultValue: "focus:outline-none focus:ring-2 focus:ring-blue-500",
    },
    activeState: {
      control: "text",
      description: "CSS class for active state",
      defaultValue: "active:bg-opacity-90",
    },
    borderRadius: {
      control: "text",
      description: "Border radius of the button text",
      defaultValue: "rounded-sm",
    },
    classes: {
      control: "text",
      description: "Additional custom classes for the button",
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicButton>;

// Default button
export const Default: Story = {
  args: {
    label: "Button Text",
    backgroundColor: "bg-primary\n",
    textColor: "text-white",
    fontSize: "text-sm",
    hoverState: "hover:bg-opacity-80",
    focusState: "focus:outline-none focus:ring-2 focus:ring-blue-500",
    activeState: "active:bg-opacity-90",
    classes: "m-0 w-1/2 p-2 rounded-sm",
  },
};

// Custom hover, focus, and active states
export const CustomStates: Story = {
  args: {
    label: "Custom States Button",
    backgroundColor: "bg-rose-500",
    textColor: "text-black",
    fontSize: "text-lg",
    hoverState: "hover:bg-green-700", // Custom hover effect
    focusState: "focus:outline-none focus:ring-4 focus:ring-green-600", // Custom focus effect
    activeState: "active:bg-green-900", // Custom active effect
    classes: "m-2 p-3 rounded-md",
  },
};

// Another example with different effects
export const AlternativeEffects: Story = {
  args: {
    label: "Alternative Effects Button",
    backgroundColor: "bg-red-500",
    textColor: "text-yellow-100",
    fontSize: "text-base",
    hoverState: "hover:bg-red-700",
    focusState: "focus:outline-none focus:ring-2 focus:ring-red-400",
    activeState: "active:bg-red-800",
    classes: "m-2 p-2 rounded-lg",
  },
};
