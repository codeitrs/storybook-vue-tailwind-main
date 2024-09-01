<template>
  <div class="page-content registration">
    <Card :padding="'py-6 px-4 md:p-6'">
      <SEORegistration />
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SEORegistration from "./SEORegistration.vue";
import Card from "../../components/card/Card.vue";

export default defineComponent({
  components: {
    SEORegistration,
    Card,
  },
});
</script>
