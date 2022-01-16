<script setup>
import { subbed, text } from "./state.js";

const props = defineProps(["subbedTwo"]);
const emits = defineEmits(["accepted"]);

const value1 = "valueone";
const value2 = "valuetwo";
const value3 = "valuethree";
const changeText = () => {
  text.value = "Button clicked";
};
</script>

<template>
  <div class="w-64 h-64 border-2 bg-teal-700">
    Comp 1
    <h1 v-if="subbed">YOUR SUBBED IN COMP 1</h1>
    <h1>Subbed two {{ subbedTwo }}</h1>
    <div class="flex flex-col">
      <p>{{ value1 }}</p>
      <p>{{ value2 }}</p>
      <p>{{ value3 }}</p>
      <p>{{ text }}</p>
    </div>
  </div>

  <button class="btn btn-primary" @click="subbed = !subbed">Subbed</button>
  <button class="btn btn-primary" @click="changeText()">Changetext</button>
</template>
