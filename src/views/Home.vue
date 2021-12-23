<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
</script>

<template>
  <div class="bg-teal-900">
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
        Ready to dive in?
        <br />
        <span class="text-indigo-600">Vite + Vue 3 + Tailwind CSS</span>
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow btn btn-primary">
          <router-link
            to="/about"
            class="inline-flex items-center justify-center"
            >Next Page</router-link
          >
        </div>
        <ButtonRepo />
      </div>
    </div>
  </div>
</template>
