<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const notes = computed(() => store.state.notes);
const totalNotes = computed(() => store.getters.totalNotes);

const title = ref("");

const details = computed(() => store.state.details);

const title2 = ref("");

function save() {
  store.dispatch("saveNote", title.value);
  title.value = "";
  store.commit("SAVE_DETAILS", title2.value);
  title2.value = "";
}
function deleteN() {
  store.dispatch("deleteNote");
  console.log();
}
</script>

<template>
  <div class="bg-base-300">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input
        type="text"
        placeholder="username"
        class="input input-bordered"
        v-model="title"
        @keypress.enter="save"
      />
      <input
        type="text"
        placeholder="details"
        class="input input-bordered"
        v-model="title2"
        @keypress.enter="save"
      />
    </div>
    <ul>
      <li v-for="note in notes" :key="note.id">
        <div class="flex flex-row gap-x-2.5">
          {{ note.title }}
          <p v-if="!note.completed">undone</p>

          <p v-if="note.completed">done</p>
          <button @click="deleteN" class="ml-1 btn btn-warning btn-xs">
            remove</button
          ><button class="ml-1 btn btn-xs btn-error">edit</button>
        </div>
      </li>

      <p>Total Notes: {{ totalNotes }}</p>

      <li class="text-red-400" v-for="(detail, index) in details" :key="index">
        {{ detail }}
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
        Ready to dive in?
        <br />
        <span class="text-accent">Vite + Vue 3 + Tailwind CSS</span>
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
