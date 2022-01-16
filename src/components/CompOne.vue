<script setup>
import {subbeder} from './state.js'

const props = defineProps(["subbedTwo"])
const emits = defineEmits(["accepted"])
</script>

<template>
  <div class="w-64 h-64 border-2 bg-teal-700">
    Comp 1
    <h1 v-if="subbeder">YOUR SUBBED IN COMP 1</h1>
    <h1>Subbed two {{ subbedTwo }}</h1>
  </div>

  <button
    class="btn btn-primary"
    @click="subbeder = !subbeder"
    v-on:click="$emit('accepted')"
  >
    Subbed
  </button>
</template>
