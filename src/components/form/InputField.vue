<template>
  <div class="mb-4">
    <label
      :for="label"
      class="block text-customColor-dark text-lg font-bold mb-1 md: mb-2"
      >{{ label }}</label
    >
    <div class="relative">
      <input
        :type="type"
        :placeholder="placeholder"
        v-model="value"
        :class="[
          'w-full p-2 pr-20 border rounded-md',
          {
            'border-red-500': error,
            'border-green-500': success,
          },
        ]"
        @input="handleInput"
      />
      <div class="absolute inset-y-0 right-0 flex items-center">
        <div
          v-if="firstButtonIcon && !secondButtonIcon"
          class="border-l border-customColor-gray h-full"
        ></div>

        <ButtonIcon
          v-if="firstButtonIcon"
          :icon="firstButtonIcon"
          :label="firstButtonLabel"
          @click="firstButtonClickHandler"
        />
        <div
          v-if="firstButtonIcon && secondButtonIcon"
          class="border-l border-customColor-gray h-full"
        ></div>
        <ButtonIcon
          v-if="secondButtonIcon"
          :icon="secondButtonIcon"
          :label="secondButtonLabel"
          @click="secondButtonClickHandler"
        />
        <Tooltip :text="'Text copied!'" :visible="showTooltip" />
      </div>

      <p v-if="error" class="absolute text-red-500 mt-2">{{ error }}</p>
      <p v-if="success" class="absolute text-green-500 mt-2">
        {{ successMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonIcon from "../button/ButtonIcon.vue";
import Tooltip from "../card/Tooltip.vue";

export default defineComponent({
  name: "InputField",
  components: {
    ButtonIcon,
    Tooltip,
  },
  props: {
    label: String,
    placeholder: String,
    successMessage: String,
    type: {
      type: String,
      default: "text",
    },
    firstButtonIcon: {
      type: Object as () => any,
      default: null,
    },
    secondButtonIcon: {
      type: Object as () => any,
      default: null,
    },
    firstButtonLabel: {
      type: String,
      default: "First Button",
    },
    secondButtonLabel: {
      type: String,
      default: "Second Button",
    },
    onFirstButtonClick: {
      type: Function,
      default: null,
    },
    onSecondButtonClick: {
      type: Function,
      default: null,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const value = ref(props.modelValue);
    const error = ref(false);
    const success = ref(false);
    const showTooltip = ref(false);

    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      value.value = input.value;
      emit("update:modelValue", value.value);

      if (value.value.length < 3) {
        error.value = true;
        success.value = false;
      } else {
        error.value = false;
        success.value = true;
      }
    };

    const firstButtonClickHandler = (event: MouseEvent) => {
      if (props.onFirstButtonClick) {
        props.onFirstButtonClick(event);
        showTooltip.value = true;
        setTimeout(() => {
          showTooltip.value = false;
        }, 2000);
      }
    };

    const secondButtonClickHandler = (event: MouseEvent) => {
      if (props.onSecondButtonClick) {
        props.onSecondButtonClick(event);
      }
    };

    return {
      value,
      error,
      success,
      showTooltip,
      handleInput,
      firstButtonClickHandler,
      secondButtonClickHandler,
    };
  },
});
</script>
