<template>
  <div class="flex flex-row gap-x-10 justify-center mt-10">
    <CompOne />
    <CompTwo />
    <CompThree />
  </div>
  <button class="btn btn-accent" @click="addProductToCart">SET VALUE</button>
  <h1 v-if="subbedMenu">Your subbed</h1>
</template>

<script setup>
import CompOne from "../components/CompOne.vue";
import CompTwo from "../components/CompTwo.vue";
import CompThree from "../components/CompThree.vue";
import { ref } from "vue";
import { subbedMenu } from "./state.js";

function addProductToCart() {
  subbedMenu.value = true;
  window.localStorage.setItem("SUBBED", JSON.stringify(subbedMenu.value));
  console.log(JSON.parse(localStorage.getItem("SUBBED")));
}
if (window.localStorage.getItem("SUBBED") !== null) {
  subbedMenu.value = JSON.parse(window.localStorage.getItem("SUBBED"));
}
</script>
