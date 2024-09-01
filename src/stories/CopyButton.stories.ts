import { Meta, StoryObj } from "@storybook/vue3";
import CopyButton from "../components/button/CopyButton.vue";
import CopyIcon from "../assets/icons/CopyIcon.vue";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Text displayed on the button",
    },
    bgColor: {
      control: "text",
      description: "Background color of the button",
    },
    textSize: {
      control: "text",
      description: "Font size of the button text",
    },
    textColor: {
      control: "text",
      description: "Text color of the button",
    },
    hoverBgColor: {
      control: "text",
      description: "Background color on hover",
    },
    borderRadius: {
      control: "text",
      description: "Border radius of the button",
    },
  },
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-orange-500",
    textSize: "text-md",
    textColor: "text-white",
    hoverBgColor: "hover:bg-orange-600",
    borderRadius: "rounded-lg",
  },
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

// Default button
export const Default: Story = {
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-primary",
    textSize: "text-md",
    textColor: "text-white",
    hoverBgColor: "hover:bg-opacity-80",
    borderRadius: "rounded-lg",
    focusState: "",
  },
};

// Hover effect
export const HoverEffect: Story = {
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-primary",
    textSize: "text-md",
    textColor: "text-white",
    hoverBgColor: "hover:bg-opacity-80\n", // Different hover effect
    borderRadius: "rounded-lg",
  },
};

// Focus effect
export const FocusEffect: Story = {
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-green-500",
    textSize: "text-md",
    textColor: "text-white",
    hoverBgColor: "hover:bg-green-600",
    borderRadius: "rounded-lg",
    focusState: "outline-none focus:ring-2 focus:ring-green-500", // Added focus state
  },
};

// Active effect
export const ActiveEffect: Story = {
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-red-500",
    textSize: "text-md",
    textColor: "text-white",
    hoverBgColor: "hover:bg-red-600",
    borderRadius: "rounded-lg",
    activeState: "bg-red-700", // Added active state
  },
};

// Custom Text Color
export const BlackTextButton: Story = {
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-orange-500",
    textSize: "text-md",
    textColor: "text-black",
    hoverBgColor: "hover:bg-orange-600",
    borderRadius: "rounded-lg",
  },
};

// Custom Border Radius
export const RoundedButton: Story = {
  args: {
    label: "Copy links for social media",
    icon: CopyIcon,
    bgColor: "bg-orange-500",
    textSize: "text-md",
    textColor: "text-white",
    hoverBgColor: "hover:bg-orange-600",
    borderRadius: "rounded-full",
  },
};
