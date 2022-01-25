<script>
import CompFour from "./CompFour.vue";
import { subbed, text, email } from "./state.js";
import { ref, reactive } from "vue";

export default {
  setup() {
    let everyThing = ref("Hello");

    const getValue = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())

        .then((json) => console.log(json))
        .then((json) => everyThing);

      return {
        everyThing,
      };
    };
    const signUp = function () {
      subbed.value = true;
      console.log(subbed);
      console.log(everyThing, "hello");
      const email2 = email.value;

      console.log(email2);
    };
    const changeValue = function () {
      everyThing.value = "disco";
    };
    return {
      everyThing,
      getValue,
      signUp,
      subbed,
      text,
      email,
      changeValue,
    };
  },
  components: { CompFour },
};
</script>

<template>
  <div class="w-64 h-64 border-2 bg-yellow-700">
    Comp 2
    <h1 v-if="subbed">YOUR SUBBED IN COMP 1</h1>
    <CompFour letterman="test" />
    {{ text }}
    <div class="form-control">
      <label class="label">
        <span class="label-text">Username</span>
      </label>
      <input
        type="email"
        placeholder="email"
        v-model="email"
        class="input input-bordered"
        required
      />
    </div>
    <p>{{ email }}</p>
    <button class="btn btn-ascent" @click="signUp">signup</button>
    <button class="btn btn-ascent" @click="getValue">GetValues</button>
    <button class="btn btn-ascent" @click="changeValue">Change</button>
    {{ everyThing }}
  </div>
</template>
