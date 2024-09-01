<template>
  <Card
    title="SEO"
    description="Provide a title and description for this page"
    :border="false"
  >
    <Card :class="'space-y-7 md:space-y-9'" :padding="'p-4 md:p-8'">
      <div>
        <p class="block mb-1 font-bold text-customColor-dark">Not for index?</p>
        <p class="text-customColor-textgrey">
          Google will not display the page in search results
        </p>
      </div>
      <ToggleButton class="!mt-2" />

      <InputField
        label="Title tag"
        v-model="titleTag"
        placeholder="Enter title"
        :successMessage="'Valid title'"
      />
      <InputField
        label="Meta description"
        v-model="metaDescription"
        placeholder="Enter description"
        :successMessage="'Valid description'"
      />
    </Card>
  </Card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../../components/card/Card.vue";
import InputField from "../../components/form/InputField.vue";
import ToggleButton from "../../components/button/ToggleButton.vue";

export default defineComponent({
  name: "SEOForm",
  components: {
    Card,
    InputField,
    ToggleButton,
  },
  setup() {
    const notForIndex = ref(false);
    const titleTag = ref("");
    const metaDescription = ref("");

    return { notForIndex, titleTag, metaDescription };
  },
});
</script>
