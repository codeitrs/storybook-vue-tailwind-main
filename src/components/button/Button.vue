<template>
  <button
    :class="[
      classes,
      width,
      height,
      backgroundColor,
      textColor,
      fontSize,
      hoverState,
      borderRadius,
      focusState,
      activeState,
      'transition ease-in-out duration-300',
      ,
    ]"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  name: "BasicButton",
  props: {
    label: {
      type: String,
      default: "Button Text",
    },
    width: {
      type: String,
      default: "w-1/2",
    },
    height: {
      type: String,
      default: "h-auto",
    },
    backgroundColor: {
      type: String,
      default: "bg-primary",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    fontSize: {
      type: String,
      default: "text-sm",
    },
    borderRadius: {
      type: String,
      default: "rounded-md",
    },
    hoverState: {
      type: String,
      default: "hover:bg-opacity-80",
    },
    focusState: {
      type: String,
      default: "outline-none focus:ring-2 focus:primary-dark",
    },
    activeState: {
      type: String,
      default: "bg-opacity-90",
    },
    classes: {
      type: String,
      default: "m-0 p-2 ",
    },
  },
};
</script>

<style lang="scss">
@import "../../index.css";
</style>
