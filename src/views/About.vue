<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";

function save() {
  store.commit("SAVE_NOTE", title.value);
}
</script>

<template>
  <div class="bg-gray-500">
    <div
      class="
        max-w-screen-xl
        px-4
        py-12
        mx-auto
        sm:px-6
        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <h2
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          sm:text-4xl sm:leading-10
        "
      >
        About Page
        <br />
        <span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
      </h2>

      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow btn btn-primary">
          <router-link to="/" class="inline-flex items-center justify-center"
            >Back Home</router-link
          >
        </div>
        <ButtonRepo />
      </div>

      {{ $route.meta.title }} / {{ $store.state.title }}
      {{ $store.state.notes }}
    </div>
  </div>
</template>
