import { Meta, StoryObj } from "@storybook/vue3";
import DangerZoneCard from "../components/card/DangerZoneCards.vue";

const meta: Meta<typeof DangerZoneCard> = {
  title: "Components/DangerZoneCard",
  component: DangerZoneCard,
  argTypes: {
    title: { control: "text", description: "Title of the card" },
    description: {
      control: "text",
      description: "Description under the title",
    },
    buttonLabel: { control: "text", description: "Label of the button" },
    buttonWidth: { control: "text", description: "Width of the button" },
    buttonHeight: { control: "text", description: "Height of the button" },
    backgroundColor: {
      control: "text",
      description: "Background color of the card",
    },
    borderColor: { control: "text", description: "Border color of the card" },
    buttonBackgroundColor: {
      control: "text",
      description: "Background color of the button",
    },
    buttonBorderRadius: {
      control: "text",
      description: "Border radius of the button",
    },
    buttonTextColor: {
      control: "text",
      description: "Text color of the button",
    },
    buttonFontSize: { control: "text", description: "Font size of the button" },
    width: { control: "text", description: "Width of the card" },
    height: { control: "text", description: "Height of the card" },
    rounded: { control: "text", description: "Rounded corners of the card" },
    border: { control: "text", description: "Border style of the card" },
    padding: { control: "text", description: "Padding inside the card" },
  },
  args: {
    title: "Delete this page?",
    description: "This permanently deletes it.",
    buttonLabel: "Delete",
    buttonWidth: "w-24",
    buttonHeight: "h-auto",
    backgroundColor: "bg-red-50",
    borderColor: "border-red-300",
    buttonBackgroundColor: "bg-red-600",
    buttonBorderRadius: "rounded-lg",
    buttonTextColor: "text-white",
    buttonFontSize: "text-sm",
    width: "w-full",
    height: "h-auto",
    rounded: "rounded-lg",
    border: "border",
    padding: "p-4",
  },
};

export default meta;
type Story = StoryObj<typeof DangerZoneCard>;

export const Default: Story = {
  args: {
    title: "Delete this page?",
    description: "This permanently deletes it.",
    backgroundColor: "bg-customColor-redlight",
    buttonBackgroundColor: "bg-customColor-red",
    buttonFontSize: "text-md",
    width: "w-full md:w-[354px]",
    rounded: "rounded-xl",
    padding: "pt-6 pl-6 pr-6 pb-9",
  },
};

export const Custom: Story = {
  args: {
    title: "Are you sure?",
    description: "This will remove all your data!",
    buttonLabel: "Remove",
    backgroundColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    buttonBackgroundColor: "bg-yellow-600",
    buttonTextColor: "text-black",
    buttonFontSize: "text-lg",
    width: "w-1/2",
    height: "h-40",
    rounded: "rounded-xl",
    border: "border-dashed",
    padding: "p-6",
  },
};
