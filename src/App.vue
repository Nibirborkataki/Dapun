<template>
  <div>
    <SplashScreen v-if="loading" />
    <div v-else>
      <div class="min-h-screen bg-gray-100">
      <NavBar @open-modal="handleOpenModal" />
      <router-view />
      <FooTer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import SplashScreen from './components/SplashScreen.vue'
import FooTer from './components/FooterBar.vue'
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 4000) // Show splash screen for 4 seconds
})

function handleOpenModal() {
  // optional: handle modal open logic if needed
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
