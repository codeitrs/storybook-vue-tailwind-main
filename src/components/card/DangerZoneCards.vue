<template>
  <div
    :class="[
      classes,
      rounded,
      border,
      padding,
      borderColor,
      backgroundColor,
      width,
      height,
      buttonBorderRadius,
    ]"
  >
    <h2 class="text-lg font-bold">{{ title }}</h2>
    <p class="text-customColor-textgrey pb-5">{{ description }}</p>

    <BasicButton
      :label="buttonLabel"
      :backgroundColor="buttonBackgroundColor"
      :textColor="buttonTextColor"
      :fontSize="buttonFontSize"
    />
  </div>
</template>

<script lang="ts">
import BasicButton from "../button/Button.vue";

export default {
  name: "DangerZoneCard",
  components: {
    BasicButton,
  },
  props: {
    title: {
      type: String,
      default: "Delete this page?",
    },
    description: {
      type: String,
      default: "This permanently deletes it.",
    },
    buttonLabel: {
      type: String,
      default: "Delete",
    },
    backgroundColor: {
      type: String,
      default: "bg-customColor-redlight",
    },
    buttonWidth: {
      type: String,
      default: "w-24",
    },
    buttonHeight: {
      type: String,
      default: "h-auto",
    },
    buttonBorderRadius: {
      type: String,
      default: "rounded-md",
    },
    borderColor: {
      type: String,
      default: "border-customColor-red",
    },

    buttonBackgroundColor: {
      type: String,
      default: "bg-customColor-red",
    },
    buttonTextColor: {
      type: String,
      default: "text-white",
    },
    buttonFontSize: {
      type: String,
      default: "text-md",
    },
    width: {
      type: String,
      default: "w-full md:w-[354px]",
    },
    height: {
      type: String,
      default: "h-auto",
    },
    rounded: {
      type: String,
      default: "rounded-xl",
    },
    padding: {
      type: String,
      default: "pt-6 pl-6 pr-6 pb-9",
    },
    border: {
      type: String,
      default: "border",
    },
    classes: {
      type: String,
      default: "",
    },
  },
};
</script>
