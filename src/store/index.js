import { createStore, createLogger } from "vuex";
// import user from "./modules/user.js";
import axios from "axios";
// import cart from "./modules/cart";
// import products from "./modules/products";

const debug = process.env.NODE_ENV !== "production";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const customers = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  mutations: {
    add(state, customer) {
      state.list.unshift(customer);
    },
    set(state, customers) {
      state.list = customers;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async get({ commit }) {
      const result = await fetch("/database.json");
      const json = await result.json();
      commit("set", json);
      await sleep(1000);
      commit("setLoading", false);
    },
  },
};
// const store = createStore({
//   state: {
//     title: "vuex store test",
//     notes: [
//       { id: 1, title: "hello 1", completed: false },
//       { id: 2, title: "hello 2", completed: false },
//       { id: 3, title: "hello 3", completed: false },
//     ],
//     details: ["mister"],
//     title2: "hello",
//   },
//   getters: {
//     totalNotes(state) {
//       return state.notes.length;
//     },
//     // thisNote: (state) => (noteId) => {
//     //   return state.notes.find((note) => note.id === noteId);
//     // },
//   },
//   mutations: {
//     SAVE_NOTE(state, title) {
//       state.notes.push({ title });
//     },
//     SAVE_DETAILS(state, title2) {
//       state.details.push(title2);
//     },
//     // DELETE_NOTE(state, noteId) {
//     //   let noteIndex = state.notes.indexOf(store.getters.thisNote(noteId));
//     //   state.notes.splice(noteIndex, 1);
//     //   delete state.notes[noteIndex].text;
//     //   console.log(state.notes[noteIndex]);
//     // },
//     DELETE_NOTE(state, title) {
//       console.log(title);
//     },
//   },
//   actions: {
//     saveNote({ commit }, title) {
//       commit("SAVE_NOTE", title);
//     },
//     deleteNote({ commit }, title) {
//       commit("DELETE_NOTE", title);
//     },
//   },
//   actions: {},
// });

// export default store;
const user = {
  namespaced: true,
  state: {
    users: [],
  },

  getters: {
    usersList: (state) => state.users,
  },

  actions: {
    async fetchUsers({ commit }) {
      const response = await axios.get("http://localhost:3000/users");
      commit("setUsers", response.data);
    },
    async addUsers({ commit }, user) {
      const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewUser", response.data);
    },
    async deleteUser({ commit }, id) {
      await axios.delete(`http://localhost:3000/users/${id}`);
      commit("removeUser", id);
    },
  },

  mutations: {
    setUsers: (state, users) => (state.users = users),
    addNewUser: (state, user) => state.users.unshift(user),
    removeUser: (state, id) => (
      state.users.filter((user) => user.id !== id),
      state.users.splice((user) => user.id, 1)
    ),
  },
};

export default createStore({
  plugins: debug ? [createLogger()] : [],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    customers,
    user,
  },
  strict: debug,
});
