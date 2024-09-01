<template>
  <div>
    <p class="text-lg font-bold mb-1 text-customColor-dark" v-if="description">
      {{ description }}
    </p>
    <div class="flex border border-primary-dark p-1 w-full md:w-275 rounded-md">
      <BasicButton
        :class="'mr-2'"
        :backgroundColor="isActive === 'yes' ? 'bg-primary-light' : 'bg-white'"
        :textColor="
          isActive === 'yes' ? 'text-primary-dark' : 'text-customColor-textgrey'
        "
        :label="yesLabel"
        @click="setActive('yes')"
      />
      <BasicButton
        :class="''"
        :backgroundColor="isActive === 'no' ? 'bg-primary-light' : 'bg-white'"
        :textColor="
          isActive === 'no' ? 'text-primary-dark' : 'text-customColor-textgrey'
        "
        :label="noLabel"
        @click="setActive('no')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BasicButton from "./Button.vue";

export default defineComponent({
  name: "ToggleButton",
  components: {
    BasicButton,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    yesLabel: {
      type: String,
      default: "Yes",
    },
    noLabel: {
      type: String,
      default: "No",
    },
  },
  setup(props) {
    const isActive = ref<"yes" | "no">("yes");
    const setActive = (value: "yes" | "no") => {
      isActive.value = value;
      console.log(isActive);
    };

    return {
      isActive,
      setActive,
      yesLabel: props.yesLabel,
      noLabel: props.noLabel,
    };
  },
});
</script>
