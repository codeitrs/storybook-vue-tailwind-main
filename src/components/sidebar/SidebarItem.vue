<template>
  <li class="text-customColor-textgrey" @click="handleClick">
    <router-link
      class="flex items-center space-x-2.5 transition duration-150 ease-out hover:ease-in py-2 hover:bg-gray-100 px-10"
      :to="to"
    >
      <span class="w-5"> <img v-if="icon" :src="icon" /></span>
      <span class="text-lg">{{ label }} </span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default {
  name: "SiderbarItem",
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit("item-clicked");
    },
  },
};
</script>
