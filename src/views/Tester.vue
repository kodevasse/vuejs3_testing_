<template>
  <div class="flex flex-row gap-x-10 justify-center mt-10">
    <CompOne />
    <CompTwo />
    <CompThree />
  </div>
</template>

<script script>
import CompOne from "@/components/CompOne.vue";
import CompTwo from "@/components/CompTwo.vue";
import CompThree from "@/components/CompThree.vue";
export default {
  components: {
    CompOne,
    CompTwo,
    CompThree,
  },
};
</script>
