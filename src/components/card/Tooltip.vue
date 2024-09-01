<template>
  <div
    v-if="visible"
    class="absolute bg-black text-white text-xs rounded py-1 px-2 z-10"
    :style="{ top: positionTop, left: positionLeft }"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Tooltip",
  props: {
    text: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    positionTop: {
      type: String,
      default: "0px",
    },
    positionLeft: {
      type: String,
      default: "0px",
    },
  },
  setup(props) {
    const visible = ref(props.visible);

    watch(
      () => props.visible,
      (newVal) => {
        visible.value = newVal;
      }
    );

    return {
      visible,
    };
  },
});
</script>
