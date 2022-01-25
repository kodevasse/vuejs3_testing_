<script setup>
import { subbed, text, email } from "./state.js";
</script>

<template>
  <div class="w-64 h-64 border-2 bg-yellow-700">
    Comp 3
    <h1 v-if="subbed">YOUR SUBBED IN COMP 1</h1>

    {{ text }}
    <button class="btn btn-primary" @click="subbed = !subbed">Subbed</button>
    <p>{{ email }}</p>
  </div>
</template>
