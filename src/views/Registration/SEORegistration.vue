<template>
  <Card
    title="SEO"
    description="Provide a title and description for this page"
    :border="false"
    :padding="'p-0'"
  >
    <Card
      :class="'space-y-7 md:space-y-9'"
      :padding="'py-6 px-4 md:py-4 md:px-8'"
    >
      <ToggleButton :description="'Is this page active?'" />
      <ToggleButton :description="'Search enabled'" />
      <CopyButton
        label="Copy links for social media"
        bgColor="bg-primary-dark"
        textColor="text-white"
        hoverBgColor="hover:opacity-80"
        borderRadius="rounded-md"
        @click="handleButtonClick"
      />
      <InputField
        label="Uniqe identifier"
        placeholder="28254678."
        firstButtonIcon="src/assets/icons/LockIcon.svg"
        v-model="copyValue"
        :onFirstButtonClick="handleUnlock"
      />
      <InputField
        label="Public Identifier"
        placeholder="Enter your identifier"
        firstButtonIcon="src/assets/icons/CopyIcon.svg"
        secondButtonIcon="src/assets/icons/ExportSquare.svg"
        v-model="copyValue"
        :onFirstButtonClick="copyText"
        :onSecondButtonClick="handleEdit"
      />

      <InputField
        label="Private identifier"
        placeholder="28254678."
        firstButtonIcon="src/assets/icons/CopyIcon.svg"
        v-model="copyValue"
        :onFirstButtonClick="copyText"
      />

      <DangerZoneCard
        title="Delete this page?"
        description="This permanently deletesit."
        buttonLabel="Delete"
        classes="!mb-[89px]"
      />
    </Card>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../../components/card/Card.vue";
import ToggleButton from "../../components/button/ToggleButton.vue";
import InputField from "../../components/form/InputField.vue";
import CopyButton from "../../components/button/CopyButton.vue";
import DangerZoneCard from "../../components/card/DangerZoneCards.vue";

export default defineComponent({
  name: "SEOForm",
  components: {
    Card,
    ToggleButton,
    InputField,
    CopyButton,
    DangerZoneCard,
  },

  setup() {
    const copyValue = ref("");

    const copyText = () => {
      if (copyValue.value) {
        navigator.clipboard.writeText(copyValue.value);
      }
    };

    const handleButtonClick = () => {
      alert("Social media links copied!");
    };
    const handleEdit = () => {
      alert("Edit button clicked");
    };
    const handleUnlock = () => {
      alert("Uncloc button clicked");
    };
    return {
      copyValue,
      handleEdit,
      copyText,
      handleButtonClick,
      handleUnlock,
    };
  },
});
</script>
