<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 to-pink-500 p-4">
      <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700">
        
        <!-- Form container with slide effect -->
        <div class="p-8 space-y-6">
          <h2 class="text-3xl font-bold text-center text-gray-800">
            {{ isLogin ? 'Welcome Back!' : 'Create Account' }}
          </h2>
  
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input
              type="email"
              placeholder="Email"
              v-model="form.email"
              required
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="password"
              placeholder="Password"
              v-model="form.password"
              required
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <transition name="fade">
              <input
                v-if="!isLogin"
                type="text"
                placeholder="Full Name"
                v-model="form.name"
                class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </transition>
            <button
              type="submit"
              class="w-full bg-[#FFE9A0] text-gray-900 font-bold py-2 rounded-md hover:bg-[#FFD580] transition"
            >
              {{ isLogin ? 'Login' : 'Sign Up' }}
            </button>
          </form>
  
          <!-- Toggle Link -->
          <p class="text-center text-sm text-gray-600">
            {{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
            <button
              class="text-pink-500 hover:underline ml-1"
              @click="toggleForm"
            >
              {{ isLogin ? 'Sign Up' : 'Login' }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isLogin = ref(true)
  const form = ref({
    email: '',
    password: '',
    name: ''
  })
  
  const toggleForm = () => {
    isLogin.value = !isLogin.value
    form.value = { email: '', password: '', name: '' }
  }
  
  const handleSubmit = () => {
    if (isLogin.value) {
      console.log('Logging in:', form.value)
    } else {
      console.log('Signing up:', form.value)
    }
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  