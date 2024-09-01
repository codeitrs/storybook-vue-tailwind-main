<template>
  <header
    class="fixed top-0 left-0 w-full h-16 bg-white text-white flex items-center justify-between px-4 border-b border-customColor-gray"
  >
    <button @click="$emit('toggle-menu')" class="md:hidden absolute right-5">
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6h16M4 12h16m-7 6h7"
          stroke="#000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </header>
</template>

<script lang="ts">
export default {
  emits: ["toggle-menu"],
};
</script>
