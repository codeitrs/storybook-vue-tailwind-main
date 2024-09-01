<template>
  <button :class="computedClass" @click="handleClick">
    {{ label }}
    <component :is="icon" class="ml-2" />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import CopyIcon from "../../assets/icons/CopyIcon.vue";

export default defineComponent({
  components: {
    CopyIcon,
  },
  name: "CopyButton",
  props: {
    label: {
      type: String,
      default: "Copy links for social media",
    },
    icon: {
      type: Object as () => any,
      default: () => CopyIcon,
    },
    bgColor: {
      type: String,
      default: "bg-orange-500",
    },
    textSize: {
      type: String,
      default: "text-md",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    hoverBgColor: {
      type: String,
      default: "hover:bg-opacity-80",
    },
    borderRadius: {
      type: String,
      default: "rounded-lg",
    },
    activeState: {
      type: String,
      default: "bg-opacity-90",
    },
    focusState: {
      type: String,
      default: "outline-none focus:ring-2 focus:primary-dark",
    },
  },
  setup(props) {
    const computedClass = computed(() => {
      return `${props.bgColor} ${props.hoverBgColor} ${props.textSize} ${props.textColor} ${props.borderRadius} px-4 py-2 flex items-center`;
    });

    const handleClick = () => {
      // Logic for copying links goes here
    };

    return {
      computedClass,
      handleClick,
    };
  },
});
</script>
