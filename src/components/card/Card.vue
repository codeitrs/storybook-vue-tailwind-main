<template>
  <div :class="cardClasess">
    <h2
      v-if="title"
      class="text-lg font-bold mb-1 md:mb-2 text-customColor-dark"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="text-customColor-textgrey mb-5 md:mb-7">
      {{ description }}
    </p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: true,
    },
    borderColor: {
      type: String,
      default: "border-customColor-graydark",
    },
    padding: {
      type: String,
      default: "md:p-4 p-2",
    },
    rounded: {
      type: String,
      default: "rounded-lg",
    },
  },
  setup(props) {
    const cardClasess = computed(() => {
      return [
        props.border ? `border ${props.borderColor}` : "",
        props.padding,
        props.rounded,
      ];
    });
    return {
      cardClasess,
    };
  },
});
</script>
