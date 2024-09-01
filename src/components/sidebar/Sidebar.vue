<template>
  <aside
    :class="[
      'z-30 fixed left-0 top-[65px] w-72 bg-white border-r shadow-lg transition-transform duration-300 ease-in-out',
      isMenuVisible ? 'translate-x-0' : '-translate-x-72',
      'md:translate-x-0 md:w-72',
    ]"
    :style="{ height: `calc(100vh - ${headerHeight}px)` }"
  >
    <div class="py-4">
      <ul class="space-y-1">
        <SidebarItem
          icon="src/assets/icons/CodeLinear.svg"
          label="Code Layout"
          to="/"
          @item-clicked="handleItemClick"
        />
        <SidebarItem
          icon="src/assets/icons/DocumentLinear.svg"
          label="Section"
          to="/section"
          @item-clicked="handleItemClick"
        />
        <SidebarItem
          icon="src/assets/icons/TranslateLinear.svg"
          label="Translate"
          to="/translate"
          @item-clicked="handleItemClick"
        />
        <SidebarItem
          icon="src/assets/icons/ClockLinear.svg"
          label="History"
          to="/history"
          @item-clicked="handleItemClick"
        />
        <SidebarItem
          icon="src/assets/icons/ColorSwatch.svg"
          label="Meta tags"
          to="/meta"
          @item-clicked="handleItemClick"
        />
        <SidebarItem
          icon="src/assets/icons/ColorSwatch.svg"
          label="Registration"
          to="/registration"
          @item-clicked="handleItemClick"
        />
        <SidebarItem
          icon="src/assets/icons/ColorSwatch.svg"
          label="Relations"
          to="/relations"
          @item-clicked="handleItemClick"
        />
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SidebarItem from "./SidebarItem.vue";

export default {
  components: { SidebarItem },
  props: {
    isMenuVisible: {
      type: Boolean,
      required: true,
    },
    headerHeight: {
      type: Number,
      required: true,
    },
  },
  emits: ["close-menu"],
  methods: {
    handleItemClick() {
      if (window.innerWidth < 768) {
        this.$emit("close-menu");
      }
    },
  },
};
</script>
