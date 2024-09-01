<template>
  <Card title="Pixels" description="Set tracking pixels" :border="false">
    <Card>
      <InputField
        label="Google analytics"
        v-model="googleTag"
        placeholder="Enter tag"
        :successMessage="'Valid tag'"
      />
      <InputField
        label="Facebook pixels"
        v-model="facebookPixels"
        placeholder="Enter facebook pixels"
        :successMessage="'Valid facebook pixels'"
      />
      <InputField
        label="Taboola"
        v-model="taboola"
        placeholder="Enter taboola"
        :successMessage="'Valid taboola'"
      />
    </Card>
  </Card>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "../../components/card/Card.vue";
import InputField from "../../components/form/InputField.vue";

export default defineComponent({
  name: "SEOForm",
  components: {
    Card,
    InputField,
  },
  setup() {
    const googleTag = ref("");
    const facebookPixels = ref("");
    const taboola = ref("");

    return { googleTag, facebookPixels, taboola };
  },
});
</script>
