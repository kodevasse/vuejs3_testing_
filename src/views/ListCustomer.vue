<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const { state } = useStore();
const isLoading = computed(() => state.customers.loading);
const customers = computed(() => state.customers.list);

const notes = computed(() => store.state.notes);

const store = useStore();
store.dispatch("customers/get");
</script>

<template>
  <div class="">
    <span v-if="isLoading">Loading...</span>
    <ul>
      <li v-for="customer in customers" :key="customer.email">
        <div class="flex flex-row gap-x-3">
          <strong class="mt-1">{{ customer.name }}</strong>
          <span class="border-lime-300 border-2 rounded"
            >({{ customer.email }})</span
          >
        </div>
      </li>
    </ul>
  </div>

  <!-- <div class="overflow-x-auto">
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
  </div> -->
</template>
