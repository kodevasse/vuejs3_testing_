<template>
  <div class="flex flex-row gap-x-10 justify-center mt-10">
    <CompOne />
    <CompTwo subbed="false" />
  </div>
</template>

<script>
import CompOne from "@/components/CompOne.vue";
import CompTwo from "@/components/CompTwo.vue";
export default {
  components: {
    CompOne,
    CompTwo,
  },
};
</script>
