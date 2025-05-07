<script setup>
import LeftsideBarVue from "@/components/LeftsideBar.vue";
import WarningBox from "@/components/WarningBox.vue";
import MainComponent from "@/components/MainComponent.vue";
import RightsideBar from "@/components/RightsideBar.vue";
</script>

<template>
  <WarningBox />

  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 py-8 px-2 md:px-0">
    
    <!-- Left Sidebar: 2nd on mobile, 1st on desktop -->
    <div class="order-2 md:order-1 md:col-span-3">
      <LeftsideBarVue />
    </div>

    <!-- Main Content: 1st on mobile, center on desktop -->
    <div class="order-1 md:order-2 md:col-span-6">
      <MainComponent />
    </div>

    <!-- Right Sidebar: 3rd on mobile and desktop -->
    <div class="order-3 md:order-3 md:col-span-3">
      <RightsideBar />
    </div>
    
  </div>
</template>
