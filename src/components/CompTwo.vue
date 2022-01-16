<template>
  <div class="w-64 h-64 border-2 bg-yellow-700">
    Comp 2
    <h1 v-if="!subbed">YOUR SUBBED IN COMP 1</h1>
    <tags-input :subbed-two="issubbed" />
    {{ test }}
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  data: () => ({}),
};
</script>
