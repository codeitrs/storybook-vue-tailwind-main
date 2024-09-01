<template>
  <button
    :class="['h-10 w-10 flex items-center justify-center']"
    @click="handleClick"
  >
    <img class="w-6" v-if="icon" :src="icon" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonIcon",
  props: {
    label: {
      type: String,
      default: "Button Text",
    },
    icon: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (this.onClick) {
        this.onClick(event);
      }
    },
  },
});
</script>
