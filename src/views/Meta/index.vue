<template>
  <div class="page-content meta space-y-10">
    <Card class="space-y-2">
      <SEOForm />
      <PixelsForm />
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SEOForm from "./SEOForm.vue";
import PixelsForm from "./PixelsForm.vue";
import Card from "../../components/card/Card.vue";

export default defineComponent({
  components: {
    SEOForm,
    PixelsForm,
    Card,
  },
});
</script>
