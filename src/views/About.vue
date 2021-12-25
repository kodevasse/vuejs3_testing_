<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";

import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const name = ref("");
const email = ref("");
const submitDisabled = computed(
  () => name.value.length === 0 || email.value.length === 0
);
const submit = () => {
  const customer = {
    name: name.value,
    email: email.value,
  };
  store.commit("customers/add", customer);
  name.value = "";
  email.value = "";
};

const notes = computed(() => store.state.notes);
</script>

<template>
  <div class="">
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        {{ note }} <button class="ml-1 btn btn-warning btn-xs">remove</button
        ><button class="ml-1 btn btn-xs btn-error">edit</button>
      </li>
    </ul>
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
