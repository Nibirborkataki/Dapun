<script setup>
import LeftsideBarVue from "../components/LeftsideBar.vue";
import RightsideBar from "../components/RightsideBar.vue";
import ProfileSection from "../components/ProfileSection.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 py-8 px-2 md:px-0">
    
    <!-- Left Sidebar on desktop, 2nd on mobile -->
    <div class="order-2 md:order-1 md:col-span-3">
      <LeftsideBarVue />
    </div>

    <!-- Profile Section center on desktop, 1st on mobile -->
    <div class="order-1 md:order-2 md:col-span-6">
      <ProfileSection :artist="artistData"/>
    </div>

    <!-- Right Sidebar on desktop, last on mobile -->
    <div class="order-3 md:order-3 md:col-span-3">
      <RightsideBar />
    </div>

  </div>
</template>
