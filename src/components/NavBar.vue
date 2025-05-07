<template>
  <div>
    <!-- NAVBAR -->
    <nav id="navbar" :class="['bg-white py-4 px-6 flex items-center justify-between z-50 relative', isMenuOpen ? '' : 'shadow-md']">
      <!-- Logo -->
      <div class="flex items-center font-bold text-red-600 z-50">
        <span class="text-2xl ml-2">সংস্কৃতিৰ দাপোণ</span>
      </div>

      <!-- Hamburger Icon -->
      <button @click="toggleMenu" class="md:hidden text-gray-600 focus:outline-none z-50">
        <div class="w-6 h-6 relative">
          <span
            :class="[
              'absolute w-full h-0.5 bg-gray-600 left-0 transition-transform duration-300',
              isMenuOpen ? 'rotate-45 top-3' : 'top-1'
            ]"
          ></span>
          <span
            :class="[
              'absolute w-full h-0.5 bg-gray-600 left-0 transition-opacity duration-300',
              isMenuOpen ? 'opacity-0' : 'top-3'
            ]"
          ></span>
          <span
            :class="[
              'absolute w-full h-0.5 bg-gray-600 left-0 transition-transform duration-300',
              isMenuOpen ? '-rotate-45 top-3' : 'top-5'
            ]"
          ></span>
        </div>
      </button>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center space-x-6">
        <ul class="flex space-x-6 text-gray-600 font-medium">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About Us</router-link></li>
          <li><router-link to="/suggestion" class="nav-link">Suggestion</router-link></li>
          <li><router-link to="/contact" class="nav-link">Contact Us</router-link></li>
        </ul>
      </div>

      <!-- Desktop Buttons -->
      <div class="hidden md:flex space-x-4">
        <router-link
        to="/login"
          class="bg-white border-2 border-[#BF3131] text-[#BF3131] px-4 py-2 rounded-md font-semibold hover:bg-[#BF3131] hover:text-white transition"
        >
          Register Yourself
        </router-link>
        <router-link
  to="/subscribe"
  class="bg-[#FFE9A0] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#FFD580] transition inline-block text-center"
>
  Subscribe
</router-link>

      </div>
    </nav>

    <!-- FULLSCREEN MOBILE MENU -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 px-6 mb-12"
    >
      <ul class="text-center space-y-6 text-xl text-gray-700 font-semibold">
        <li><router-link @click="toggleMenu" to="/" class="nav-link">Home</router-link></li>
        <li><router-link @click="toggleMenu" to="/about" class="nav-link">About Us</router-link></li>
        <li><router-link @click="toggleMenu" to="/suggestion" class="nav-link">Suggestion</router-link></li>
        <li><router-link @click="toggleMenu" to="/contact" class="nav-link">Contact Us</router-link></li>
      </ul>

      <!-- Buttons at Bottom -->
      <div class="absolute bottom-10 flex flex-col items-center space-y-4 w-full px-6">
        <router-link
        to="/login"
          class="bg-white border-2 border-[#BF3131] text-[#BF3131] px-4 py-2 rounded-md font-semibold hover:bg-[#BF3131] hover:text-white transition"
        >
          Register Yourself
        </router-link>
        <router-link
  to="/subscribe"
  class="bg-[#FFE9A0] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#FFD580] transition inline-block text-center"
>
  Subscribe
</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  // Animate navbar on load
  gsap.from("#navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  })

  // Scroll hide/show effect
  let lastScroll = window.scrollY

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY

    if (currentScroll > lastScroll && currentScroll > 50) {
      // Scrolling Down - Hide navbar
      gsap.to("#navbar", {
        y: -100,
        duration: 0.5,
        ease: "power2.out"
      })
    } else {
      // Scrolling Up - Show navbar
      gsap.to("#navbar", {
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    lastScroll = currentScroll
  })
})
</script>

<style scoped>
.nav-link {
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}
.nav-link:hover {
  transform: translateY(-4px);
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #FFE9A0;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
</style>
