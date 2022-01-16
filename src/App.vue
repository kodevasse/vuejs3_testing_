<script setup>
import { ref } from "vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1
          @click="counter = 0"
          class="text-3xl font-bold leading-tight text-gray-900"
        >
          {{ $route.meta.title }} / {{ counter }}
        </h1>
        <button class="btn btn-primary" @click="$router.push('create')">
          Create customer
        </button>
        <button class="btn btn-primary" @click="$router.push('list')">
          List customer
        </button>
        <button class="btn btn-primary" @click="$router.push('/')">home</button>

        <button class="btn btn-primary" @click="$router.push('/users')">
          List users
        </button>
        <button class="btn btn-primary" @click="$router.push('/tester')">
          Tester
        </button>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style></style>
