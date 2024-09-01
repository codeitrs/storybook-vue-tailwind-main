import { Meta, StoryObj } from "@storybook/vue3";
import InputField from "../components/form/InputField.vue";

import CopyIcon from "../assets/icons/CopyIcon.svg";
import EditIcon from "../assets/icons/EditIcon.svg";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  args: {
    label: "Your Name",
    placeholder: "Enter your name",
    successMessage: "Looks good!",
    type: "text",
    modelValue: "",
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Default Input Fields",
    placeholder: "Type something...",
    type: "text",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    label: "First Icon",
    firstButtonIcon: CopyIcon,
  },
};

export const WithTwoIcon: Story = {
  args: {
    ...Default.args,
    label: "First & Second Icon",
    firstButtonIcon: CopyIcon,
    secondButtonIcon: EditIcon,
  },
};
