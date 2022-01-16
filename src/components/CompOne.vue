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
<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  setup() {
    const subbeder = ref(false);

    return { subbeder };
  },
  props: ["subbedTwo"],
  emits: ["accepted"],

  data() {
    return {};
  },
};
</script>
