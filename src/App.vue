<template>
  <div>
    <Header @toggle-menu="toggleMenu" />
    <Sidebar
      :isMenuVisible="isMenuVisible"
      :headerHeight="headerHeight"
      @close-menu="toggleMenu"
    />
    <main
      :class="[
        'main-content transition-transform duration-300 ease-in-out px-3 py-4 md:py-5 md:px-6 mt-[65px]',
        {
          'ml-72': isMenuVisible && !isSmallScreen,
          'ml-0': !isMenuVisible || isSmallScreen,
        },
      ]"
    >
      <router-view class="bg-white py-6 px-4 md:p-6 rounded-md"></router-view>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";

export default {
  components: { Sidebar, Header },
  setup() {
    const isSmallScreen = ref(window.innerWidth < 768);
    const isMenuVisible = ref(false);

    const toggleMenu = () => {
      isMenuVisible.value = !isMenuVisible.value;
    };

    const handleResize = () => {
      isSmallScreen.value = window.innerWidth < 768;
      if (!isSmallScreen.value) {
        isMenuVisible.value = true;
      } else {
        isMenuVisible.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
    });

    return {
      isMenuVisible,
      toggleMenu,
      isSmallScreen,
      headerHeight: 65,
    };
  },
};
</script>
