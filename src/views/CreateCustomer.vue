<script setup>
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

// const notes = computed(() => store.state.notes);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
        <tr>
          <th>4</th>
          <td>Marjy Ferencz</td>
          <td>Office Assistant I</td>
          <td>Crimson</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
